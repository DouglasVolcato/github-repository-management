import React, { useState } from "react";
import Note from "../Note/Note";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useEffect } from "react";
import "./Notes.css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const data = await repositoryManagementApi.getAllRepo().then((notes) => {
      const priorityHigh = notes
        .filter((i) => i.priority === "High")
        .sort((a, b) => {
          return a.deadline > b.deadline
            ? 1
            : a.deadline === b.deadline
            ? 0
            : -1;
        });
      const priorityMedium = notes
        .filter((i) => i.priority === "Medium")
        .sort((a, b) => {
          return a.deadline > b.deadline
            ? 1
            : a.deadline === b.deadline
            ? 0
            : -1;
        });
      const priorityLow = notes
        .filter((i) => i.priority === "Low")
        .sort((a, b) => {
          return a.deadline > b.deadline
            ? 1
            : a.deadline === b.deadline
            ? 0
            : -1;
        });

      return priorityHigh.concat(priorityMedium).concat(priorityLow);
    });

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
