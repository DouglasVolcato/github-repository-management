import React, { useState } from "react";
import Repository from "../Repository/Repository";
import { gitHubApi } from "../Api/gitHubApi";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [repoName, setRepoName] = useState("");

  async function selectName(event) {
    event.preventDefault();
    const repos = await gitHubApi.getRepositories(event.target.name.value);
    setRepositories([...repos]);
  }

  function selectRepo(event) {
    event.preventDefault();
    setRepoName(event.target.name.value);
  }

  return (
    <div className="Repositories">
      <form onSubmit={selectName}>
        <input type="text" name="name" placeholder="Github username"></input>
        <button type="submit" className="btn-submit">
          Search
        </button>
      </form>

      <form onSubmit={selectRepo}>
        <input type="text" name="name" placeholder="Repository name"></input>
        <button type="submit" className="btn-submit">
          Search
        </button>
      </form>

      {repositories === [] ? (
        <p>Loading...</p>
      ) : (
        repositories.map((repo, key) => (
          <Repository repo={repo} repoName={repoName} key={key} />
        ))
      )}
    </div>
  );
}
