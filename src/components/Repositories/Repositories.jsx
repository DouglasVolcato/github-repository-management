import React, { useState } from "react";
import Repository from "../Repository/Repository";
import { gitHubApi } from "../Api/gitHubApi";
import "./Repositories.css";

export default function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const [repoName, setRepoName] = useState("");

  async function selectName(event) {
    event.preventDefault();
    const repos = await gitHubApi
      .getRepositories(event.target.name.value)
      .then((data) =>
        data.sort((a, b) => {
          return a.name.toLowerCase() < b.name.toLowerCase()
            ? -1
            : a.name.toLowerCase() > b.name.toLowerCase()
            ? 1
            : 0;
        })
      );
    setRepositories([...repos]);
  }

  function selectRepo(event) {
    event.preventDefault();
    setRepoName(event.target.name.value);
  }

  return (
    <div className="Repositories">
      <form className="Repositories__form" onSubmit={selectName}>
        <input
          className="Repositories__form--input"
          type="text"
          name="name"
          placeholder="Github username"
        ></input>
        <button className="Repositories__form--button" type="submit">
          SEARCH
        </button>
      </form>

      <form className="Repositories__form" onSubmit={selectRepo}>
        <input
          className="Repositories__form--input"
          type="text"
          name="name"
          placeholder="Repository name / ID"
        ></input>
        <button className="Repositories__form--button" type="submit">
          SEARCH
        </button>
      </form>

      <div className="Repositories__repositoryList">
        {repositories === [] ? (
          <p>Loading...</p>
        ) : (
          repositories.map((repo, key) => (
            <Repository repo={repo} repoName={repoName} key={key} />
          ))
        )}
      </div>
    </div>
  );
}
