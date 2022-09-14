import { useState } from "react";
import "./EditPage.css";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function EditPage(props) {
  const [newNote, setNewNote] = useState();

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
          placeholder={props.data.name}
          onChange={(event) => {
            setNewNote({ ...newNote, name: event.target.value });
          }}
        />{" "}
        <br />
        Priority:{" "}
        <input
          className="EditPage__form--input"
          type="radio"
          name="priority"
          value="High"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        />{" "}
        High
        <input
          className="EditPage__form--input"
          type="radio"
          name="priority"
          value="Medium"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        />{" "}
        Medium
        <input
          className="EditPage__form--input"
          type="radio"
          name="priority"
          value="Low"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        />{" "}
        Low
        <br />
        Note:{" "}
        <input
          className="EditPage__form--input"
          type="text"
          name="note"
          placeholder={props.data.note}
          onChange={(event) => {
            setNewNote({ ...newNote, note: event.target.value });
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
