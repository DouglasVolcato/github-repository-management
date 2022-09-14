import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import EditPage from "../EditPage/EditPage";

export default function Note(props) {
  const [editModal, setEditModal] = useState(false);

  async function deleteNote(repoName) {
    if (window.confirm("Are you sure to delete this note?")) {
      props.getNotes();
      repositoryManagementApi.deleteRepo(repoName);
    }
    props.getNotes();
  }

  function showEditModal() {
    props.getNotes();
    editModal === false ? setEditModal(true) : setEditModal(false);
    props.getNotes();
  }

  return (
    <div className="Note">
      <p>Name: {props.data.name}</p>
      <p>Priority: {props.data.priority}</p>
      <p>Note: {props.data.note}</p>
      <a href={props.data.link} target="_blank" rel="noreferrer">
        <button>Access</button>
      </a>
      <button
        onClick={() => {
          deleteNote(props.data.name);
        }}
      >
        Delete
      </button>

      <button onClick={() => showEditModal()}>Edit</button>

      {editModal === true ? (
        <EditPage data={props.data} showEditModal={showEditModal} />
      ) : (
        <></>
      )}
    </div>
  );
}
