import Repositories from "../Repositories/Repositories";
import Notes from "../Notes/Notes";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Body.css";

export default function Body(props) {
  function showPage() {
    if (props.page === "login") {
      return <Login />;
    } else if (props.page === "register") {
      return <Register />;
    } else if (props.page === "notes") {
      return <Notes />;
    } else if (props.page === "repositories") {
      return <Repositories />;
    }
  }

  return <div className="Body">{showPage()}</div>;
}
