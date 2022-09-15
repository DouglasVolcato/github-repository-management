import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import "./Repository.css";

export default function Repository(props) {
  async function createNote() {
    return await repositoryManagementApi.addRepo({
      name: props.repo.name,
      link: props.repo.svn_url,
      priority: "Low",
      note: "Empty",
    });
  }

  if (
    props.repo.name.toLowerCase().includes(props.repoName.toLowerCase()) ||
    props.repo.id
      .toString()
      .toLowerCase()
      .includes(props.repoName.toLowerCase())
  ) {
    return (
      <section className="Repository">
        <div className="Repository__id">ID: {props.repo.id}</div>
        <div className="Repository__name">{props.repo.name}</div>
        <div className="Repository__buttons">
          <a
            className="Repository__accessButton"
            href={props.repo.svn_url}
            target="_blank"
            rel="noreferrer"
          >
            <button className="Repository__accessButton2">ACCESS</button>
          </a>
          <button
            className="Repository__addButton"
            onClick={() => createNote()}
          >
            ADD NOTE
          </button>
        </div>
      </section>
    );
  }
}
