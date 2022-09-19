import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useState, useEffect } from "react";
import ExtraSecurity from "../extraSecurity/ExtraSecurity";
import "./LoggedUser.css";

export default function LoggedUser(props) {
  const [user, setUser] = useState({});
  const [keyReferences, setkeyReferences] = useState([]);
  const [hasKeys, setHasKeys] = useState(0);
  const loginInfo = props.loginInfo;

  async function getLoggedUser() {
    const response = await repositoryManagementApi.getUserById();
    setUser({ ...response });
    props.setFullUserProfile({ ...response });
    getUserKeyReferences(response.email);
  }

  async function getUserKeyReferences(UserEmail) {
    const data = await repositoryManagementApi.getSecurityKeys(UserEmail);
    setkeyReferences([...data]);
    if(data.length === 0){
      setHasKeys(1)
    } else if(data.length > 0){
      setHasKeys(2)
    }
  }

  useEffect(() => {
    getLoggedUser();
  }, [loginInfo]);

  return (
    <div className="LoggedUser">
      {user.name ? (
        <div>
          <button
            type="button"
            className="LoggedUser__logged"
            onClick={() => props.setShowUserModal(true)}
          >
            ✓ Logged as {user.name}
          </button>

          <ExtraSecurity user={user} keyReferences={keyReferences} hasKeys={hasKeys}/>
        </div>
      ) : (
        <div>
          <h2 className="LoggedUser__notLogged">
            Make login to access the notes.
          </h2>
        </div>
      )}
    </div>
  );
}
