const baseUrl = "https://repository-management.up.railway.app";

export const repositoryManagementApi = {
  getAllRepo: async () => {
    const response = await fetch(baseUrl + "/repo/get-all-repository", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  deleteRepo: async (repoName) => {
    const response = await fetch(
      baseUrl + "/repo/delete-repository/" + repoName,
      {
        method: "DELETE",
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
      }
    );
    const data = await response.json();
    return data;
  },

  editRepo: async (repoName, repoBody) => {
    const response = await fetch(
      baseUrl + "/repo/update-repository/" + repoName,
      {
        method: "PUT",
        headers: new Headers({
          Authorization: "Bearer " + localStorage.getItem("userToken"),
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ ...repoBody }),
      }
    );
    const data = await response.json();
    return data;
  },

  addRepo: async (repoBody) => {
    const response = await fetch(baseUrl + "/repo/create-repository", {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...repoBody }),
    });
    const data = await response.json();
    return data;
  },

  login: async (body) => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userToken");
    const response = await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...body }),
    });
    const data = await response.json();
    localStorage.setItem("userToken", data.token);
    localStorage.setItem("userId", data.userId);
    return data;
  },

  createUser: async (userBody) => {
    const response = await fetch(baseUrl + "/user/create-user", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    return data;
  },

  getUserById: async () => {
    const id = localStorage.getItem("userId");
    const response = await fetch(baseUrl + "/user/get-by-id-user/" + id, {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  deleteUser: async () => {
    const response = await fetch(baseUrl + "/user/delete-user/", {
      method: "DELETE",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const data = await response.json();
    return data;
  },

  editUser: async (userBody) => {
    const response = await fetch(baseUrl + "/user/update-user/", {
      method: "PUT",
      headers: new Headers({
        Authorization: "Bearer " + localStorage.getItem("userToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...userBody }),
    });
    const data = await response.json();
    return data;
  },
};
