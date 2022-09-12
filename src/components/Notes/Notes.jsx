import React, { useState } from "react";
import Note from "../Note/Note";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const data = await repositoryManagementApi.getAllRepo();
    setNotes([...data]);
  }

  getNotes();

  return (
    <div className="Notes" onChange={getNotes}>
      {notes.map((data) => (
        <Note data={data} />
      ))}
    </div>
  );
}
