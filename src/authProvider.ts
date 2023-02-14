import axios from "./lib/axios";

export const authProvider = {
  // called when the user attempts to log in
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    const res = await axios.post("/auth/login", {
      email: username,
      password,
    });

    if (res.status === 200) {
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("user", res.data.user);

      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // called when the user clicks on the logout button
  logout: async () => {
    // const res = await axios.post("/auth/logout");

    // if (res.status === 200) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    return Promise.resolve();
    // } else {
    // return Promise.reject();
  },

  // called when the API returns an error
  checkError: ({ status }) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    return Promise.reject();
    // if (status === 401 || status === 403) {
    // }
    // return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    // console.log(localStorage.getItem("userId"));
    return localStorage.getItem("accessToken")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
