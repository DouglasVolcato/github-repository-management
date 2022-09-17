import React, { useState } from "react";
import Note from "../Note/Note";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useEffect } from "react";
import "./Notes.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const data = await repositoryManagementApi.getAllRepo().then((notes) =>
      notes.sort((a, b) => {
        return a.priority === "High" && b.priority !== "High"
          ? -1
          : a.priority === "Medium" &&
            b.priority !== "Medium" &&
            b.priority !== "High"
          ? -1
          : 1;
      })
    );
    setNotes([...data]);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="Notes">
      {notes.map((data, index) => (
        <Note data={data} key={index} getNotes={getNotes} />
      ))}
    </div>
  );
}
