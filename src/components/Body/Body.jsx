import Repositories from "../Repositories/Repositories";
import Notes from "../Notes/Notes";
import Login from "../Login/Login";

export default function Body() {
  return (
    <div className="Body">
      <Login />
      <Notes />
      <Repositories />
    </div>
  );
}
