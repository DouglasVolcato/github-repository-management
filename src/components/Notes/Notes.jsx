import React, { useState } from "react";
import Note from "../Note/Note";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useEffect } from "react";
import "./Notes.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const data = await repositoryManagementApi.getAllRepo();
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
