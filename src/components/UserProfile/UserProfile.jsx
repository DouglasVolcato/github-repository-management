import "./UserProfile.css";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import { useState } from "react";

export default function UserProfile(props) {
  const [editionPage, setEditionPage] = useState(false);
  const [editedUser, setEditedUser] = useState({
    email: props.user.email,
    name: props.user.name,
    photo: props.user.photo,
  });

  async function deleteUser() {
    if (window.confirm("Are you sure to delete your profile?")) {
      await repositoryManagementApi.deleteUser().then(() => {
        props.setShowUserModal(false);
        window.location.reload();
      });
    }
  }

  async function editUser(event) {
    event.preventDefault();
    const updates = { ...editedUser };
    const response = await repositoryManagementApi.editUser(updates);

    if (response.name) {
      alert("Profile updated");
      props.setFullUserProfile(Object.assign(props.user, updates));
      props.setFullUserProfile(Object.assign(props.user, updates));
      setEditionPage(false);
    } else {
      alert("There was an error updating the profile.");
    }
  }

  if (editionPage === false) {
    return (
      <div className="UserProfile">
        <div className="UserProfile__div">
          {props.user.photo === "" || props.user.photo === undefined ? (
            <span></span>
          ) : (
            <div className="UserProfile__image">
              <img
                className="UserProfile__image--img"
                src={props.user.photo}
                alt="User profile"
              />
            </div>
          )}
          <p className="UserProfile__info">Name: {props.user.name}</p>
          <p className="UserProfile__info">Email: {props.user.email}</p>
          <p className="UserProfile__info">
            Photo:{" "}
            {props.user.photo === "" || props.user.photo === undefined
              ? "Unset"
              : "Set"}
          </p>
          <p className="UserProfile__info">Password: Secret</p>

          <div className="UserProfile__buttons">
            <button
              className="UserProfile__buttons--edit"
              onClick={() => setEditionPage(true)}
            >
              EDIT
            </button>
            <button
              className="UserProfile__buttons--delete"
              onClick={() => {
                deleteUser();
              }}
            >
              DELETE
            </button>
            <button
              className="UserProfile__buttons--close"
              onClick={() => window.location.reload()}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="UserProfile">
        <form className="UserProfile__div" onSubmit={editUser}>
          {editedUser.photo === "" || editedUser.photo === undefined ? (
            <span></span>
          ) : (
            <div className="UserProfile__image">
              <img
                className="UserProfile__image--imgEdit"
                src={editedUser.photo}
                alt="User profile"
              />
            </div>
          )}
          <label className="UserProfile__info">Name:</label>
          <input
            type="text"
            className="UserProfile__info"
            value={editedUser.name}
            onChange={(event) => {
              setEditedUser({ ...editedUser, name: event.target.value });
            }}
          ></input>
          <label className="UserProfile__info">Email:</label>
          <input
            type="text"
            className="UserProfile__info"
            value={editedUser.email}
            onChange={(event) => {
              setEditedUser({ ...editedUser, email: event.target.value });
            }}
          ></input>
          <label className="UserProfile__info">Photo:</label>
          <input
            type="text"
            className="UserProfile__info"
            value={editedUser.photo}
            onChange={(event) => {
              setEditedUser({ ...editedUser, photo: event.target.value });
            }}
          ></input>
          <label className="UserProfile__info">Password:</label>
          <input
            type="password"
            className="UserProfile__info"
            value={editedUser.password}
            onChange={(event) => {
              setEditedUser({ ...editedUser, password: event.target.value });
            }}
          ></input>

          <div className="UserProfile__buttons">
            <button className="UserProfile__buttons--edit" type="submit">
              SUBMIT
            </button>

            <button
              className="UserProfile__buttons--close"
              type="button"
              onClick={() => setEditionPage(false)}
            >
              CLOSE
            </button>
          </div>
        </form>
      </div>
    );
  }
}
