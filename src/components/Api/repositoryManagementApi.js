const baseUrl = "http://localhost:3001";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImM2NTJiNDgzLTA0YWItNGFkZS04YzYwLWQzM2U5NjZjMjBhNiIsImlhdCI6MTY2MjkzOTY0OCwiZXhwIjoxNjYzMDI2MDQ4fQ.VQHi1cSPuulY76WggH2Slc3MaJq9cLE8VMH7nRCg03s";

export const repositoryManagementApi = {
  getAllRepo: async () => {
    const response = await fetch(baseUrl + "/repo/get-all-repository", {
      method: "GET",
      headers: new Headers({
        Authorization: "Bearer " + token,
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
          Authorization: "Bearer " + token,
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
          Authorization: "Bearer " + token,
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
        Authorization: "Bearer " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...repoBody }),
    });
    const data = await response.json();
    return data;
  },

  login: async (body) => {
    const response = await fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ ...body }),
    });
    const data = await response.json();
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
};
