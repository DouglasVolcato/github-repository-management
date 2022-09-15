import { useState } from "react";
import "./EditPage.css";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function EditPage(props) {
  const [newNote, setNewNote] = useState();
  const [noteInfo, setNoteInfo] = useState({
    name: props.data.name,
    note: props.data.note,
  });

  async function updateNote(event) {
    event.preventDefault();
    setNewNote({ ...newNote });
    repositoryManagementApi.editRepo(props.data.name, newNote);
    props.showEditModal();
  }

  return (
    <div className="EditPage">
      <form onSubmit={updateNote} className="EditPage__form">
        Name:{" "}
        <input
          className="EditPage__form--input"
          type="text"
          name="name"
          value={noteInfo.name}
          onChange={(event) => {
            setNewNote({ ...newNote, name: event.target.value });
            setNoteInfo({ ...noteInfo, name: event.target.value });
          }}
        />
        <br />
        Priority:
        <select
          className="EditPage__form--input"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        >
          <option value=""></option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <br />
        Note:
        <textarea
          className="EditPage__form--input"
          type="text"
          name="note"
          rows={5}
          value={noteInfo.note}
          onChange={(event) => {
            setNewNote({ ...newNote, note: event.target.value });
            setNoteInfo({ ...noteInfo, note: event.target.value });
          }}
        />{" "}
        <br />
        <div className="EditPage__form--buttons">
          <button
            className="EditPage__form--closeButton"
            onClick={() => props.showEditModal()}
          >
            CLOSE
          </button>
          <button className="EditPage__form--submitButton" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
