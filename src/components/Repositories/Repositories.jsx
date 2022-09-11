import React, { useState, useEffect } from "react";
import Repository from "../Repository/Repository";
import { gitHubApi } from "../Api/gitHubApi";

export function Repositories() {
  const [repositories, setRepositories] = useState([]);

  async function selectName(event) {
    event.preventDefault();

    const repos = await gitHubApi.getRepositories(event.target.name.value)
    setRepositories([...repos])
  }



  return (
    <div className="Repositories">
      <form onSubmit={selectName}>
        <input
          type="text"
          name="name"
        ></input>
        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>

      {repositories === [] ? (
        <p>Loading...</p>
      ) : (
        repositories.map((repo) => <Repository repo={repo} />)
      )}
    </div>
  );
}
