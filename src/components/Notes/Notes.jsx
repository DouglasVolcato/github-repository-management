import React, { useState } from "react";
import Note from "../Note/Note";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useEffect } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [reload, setReload] = useState(0);

  function reloadPage() {
    setReload(reload + 1);
  }
  async function getNotes() {
    const data = await repositoryManagementApi.getAllRepo();
    setNotes([...data]);
  }

  useEffect(() => {
    getNotes();
  }, [reload]);

  return (
    <div className="Notes" onChange={getNotes}>
      {notes.map((data, index) => (
        <Note data={data} key={index} reloadPage={reloadPage} />
      ))}
    </div>
  );
}
