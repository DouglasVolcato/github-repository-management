import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function Repository(props) {
  async function createNote() {
    return await repositoryManagementApi.addRepo({
      name: props.repo.name,
      link: props.repo.svn_url,
      priority: "Low",
      note: "Empty",
    });
  }

  if (props.repo.name.toLowerCase().includes(props.repoName.toLowerCase())) {
    return (
      <section>
        <div>{props.repo.name}</div>{" "}
        <a href={props.repo.svn_url} target="_blank" rel="noreferrer">
          <button>Access</button>
        </a>
        <button onClick={() => createNote()}>Add note</button>
      </section>
    );
  }
}
