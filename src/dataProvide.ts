import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import _ from "lodash";

function returnChanges(object, base) {
  return _.fromPairs(
    _.differenceWith(_.toPairs(object), _.toPairs(base), _.isEqual)
  );
}

export default (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson,
  countHeader: string = "Content-Range"
): DataProvider => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const rangeStart = (page - 1) * perPage;
    const rangeEnd = page * perPage - 1;

    const query = {
      sort: [field, order.toLowerCase()],
      range: [page, perPage],
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options =
      countHeader === "Content-Range"
        ? {
            // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
            headers: new Headers({
              Range: `${resource}=${rangeStart}-${rangeEnd}`,
            }),
            credentials: "include",
          }
        : {
            credentials: "include",
          };

    return httpClient(url, options).then(({ headers, json }) => {
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        );
      }
      return {
        data: json.map((resource) => ({ ...resource, id: resource._id })),
        total:
          countHeader === "Content-Range"
            ? parseInt(headers.get("content-range").split("/").pop(), 10)
            : parseInt(headers.get(countHeader.toLowerCase())),
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      credentials: "include",
    }).then(({ json }) => ({
      data: { ...json, id: json._id },
    })),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url, {
      credentials: "include",
    }).then(({ json }) => ({
      data: json.map((resource) => ({ ...resource, id: resource._id })),
    }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const rangeStart = (page - 1) * perPage;
    const rangeEnd = page * perPage - 1;

    const query = {
      sort: [field, order.toLowerCase()],
      range: [page, perPage],
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    const options =
      countHeader === "Content-Range"
        ? {
            // Chrome doesn't return `Content-Range` header if no `Range` is provided in the request.
            headers: new Headers({
              Range: `${resource}=${rangeStart}-${rangeEnd}`,
            }),
            credentials: "include",
          }
        : {
            credentials: "include",
          };

    return httpClient(url, options).then(({ headers, json }) => {
      if (!headers.has(countHeader)) {
        throw new Error(
          `The ${countHeader} header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare ${countHeader} in the Access-Control-Expose-Headers header?`
        );
      }
      return {
        data: json,
        total:
          countHeader === "Content-Range"
            ? parseInt(headers.get("content-range").split("/").pop(), 10)
            : parseInt(headers.get(countHeader.toLowerCase())),
      };
    });
  },

  update: (resource, params) => {
    delete params.data._id;
    delete params.data.id;
    delete params.data.__v;
    delete params.data.createdAt;
    delete params.data.updatedAt;

    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(returnChanges(params.data, params.previousData)),
      credentials: "include",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }),
    }).then(({ json }) => ({ data: { ...json, id: json._id } }));
  },

  // simple-rest doesn't handle provide an updateMany route, so we fallback to calling update n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
          headers: new Headers({
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }),
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
      credentials: "include",
      headers: new Headers({
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }),
    }).then(({ json }) => ({ data: { ...params.data, id: json._id } })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "text/plain",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      }),
      credentials: "include",
    }).then(({ json }) => ({ data: { ...json, id: json._id } })),

  // simple-rest doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "DELETE",
          headers: new Headers({
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            "Content-Type": "text/plain",
          }),
          credentials: "include",
        })
      )
    ).then((responses) => ({
      data: responses.map(({ json }) => json.id),
    })),
});
