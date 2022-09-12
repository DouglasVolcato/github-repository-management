import Repositories from "../Repositories/Repositories";
import Notes from "../Notes/Notes";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useState } from "react";

export default function Body() {
  const [newToken, setNewToken] = useState(0);

  function newLogin() {
    setNewToken(newToken + 1);
  }

  return (
    <div className="Body">
      <Register />
      <Login newLogin={newLogin} />
      <Notes />
      <Repositories />
    </div>
  );
}
