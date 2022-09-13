import { useState } from "react";
import "./EditPage.css";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function EditPage(props) {
  const [newNote, setNewNote] = useState();

  async function updateNote(event) {
    event.preventDefault();
    setNewNote({ ...newNote });
    repositoryManagementApi.editRepo(props.data.name, newNote);
  }

  return (
    <div className="EditPage">
      <form onSubmit={updateNote} className="EditPage_form">
        Name:{" "}
        <input
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
          type="radio"
          name="priority"
          value="High"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        />{" "}
        High
        <input
          type="radio"
          name="priority"
          value="Medium"
          onChange={(event) => {
            setNewNote({ ...newNote, priority: event.target.value });
          }}
        />{" "}
        Medium
        <input
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
          className="EditPage__form--note"
          type="text"
          name="note"
          placeholder={props.data.note}
          onChange={(event) => {
            setNewNote({ ...newNote, note: event.target.value });
          }}
        />{" "}
        <br />
        <button onClick={() => props.showEditModal()}>Close</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
