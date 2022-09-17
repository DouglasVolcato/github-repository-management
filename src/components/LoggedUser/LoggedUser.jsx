import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useState, useEffect } from "react";
import "./LoggedUser.css";

export default function LoggedUser(props) {
  const [user, setUser] = useState({});

  async function getLoggedUser() {
    const response = await repositoryManagementApi.getUserById();
    setUser({ ...response });
  }

  useEffect(() => {
    getLoggedUser();
  }, [props.loginInfo]);

  return (
    <div className="LoggedUser">
      {user.name ? (
        <button className="LoggedUser__logged">✓ Logged as {user.name}</button>
      ) : (
        <div>
          <h2 className="LoggedUser__notLogged">Make login to access</h2>
          <h2 className="LoggedUser__notLogged">the notes.</h2>
        </div>
      )}
    </div>
  );
}
