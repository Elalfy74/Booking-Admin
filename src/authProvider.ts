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
    const res = await axios.post("/auth/login-cookies", {
      email: username,
      password,
    });

    if (res.status === 200) {
      localStorage.setItem("username", username);
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // called when the user clicks on the logout button
  logout: async () => {
    const res = await axios.post("/auth/logout");

    if (res.status === 200) {
      localStorage.removeItem("username");
      return Promise.resolve();
    } else {
      return Promise.reject();
    }
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};
