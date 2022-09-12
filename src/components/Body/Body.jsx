import Repositories from "../Repositories/Repositories";
import Notes from "../Notes/Notes";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Body() {
  return (
    <div className="Body">
      <Register />
      <Login />
      <Notes />
      <Repositories />
    </div>
  );
}
