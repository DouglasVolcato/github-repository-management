const baseUrl = "https://api.github.com/users/";

export const gitHubApi = {
  getRepositories: async (userName) => {
    const response = await fetch(baseUrl + userName + "/repos", {
      method: "GET",
    });
    const data = await response.json();

    return data;
  },
};
