import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import "./Register.css";

export default function Register() {
  const [userImage, setUserImage] = useState("");
  const [registerUser, setRegisterUser] = useState();
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    photo: "",
  });

  function handleChange() {
    setRegisterInfo({
      name: "",
      email: "",
      password: "",
      photo: "",
    });
  }

  async function addNewUser(event) {
    event.preventDefault();
    setRegisterUser({ ...registerUser });
    const apiAnswer = await repositoryManagementApi.createUser(registerUser);

    try {
      if (apiAnswer.message.includes("Email already exists in database")) {
        alert("Email already registrated.");
      }
    } catch (err) {
      handleChange();
      alert("Successfully registered!");
    }
  }

  return (
    <div className="Register">
      <h1 className="Register__h1">Register</h1>
      <form className="Register__form" onSubmit={addNewUser}>
        <input
          className="Register__form--input"
          type="text"
          name="name"
          required={true}
          placeholder="Name"
          value={registerInfo.name}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, name: event.target.value });
            setRegisterInfo({ ...registerInfo, name: event.target.value });
          }}
        />
        <br />
        <input
          className="Register__form--input"
          type="email"
          name="email"
          required={true}
          placeholder="Email"
          value={registerInfo.email}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, email: event.target.value });
            setRegisterInfo({ ...registerInfo, email: event.target.value });
          }}
        />
        <br />
        <input
          className="Register__form--input"
          type="password"
          name="password"
          required={true}
          placeholder="Password"
          value={registerInfo.password}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, password: event.target.value });
            setRegisterInfo({ ...registerInfo, password: event.target.value });
          }}
        />
        <br />
        <input
          className="Register__form--input"
          type="link"
          name="password"
          required={true}
          placeholder="Photo"
          value={registerInfo.photo}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, photo: event.target.value });
            setRegisterInfo({ ...registerInfo, photo: event.target.value });
            setUserImage(event.target.value);
          }}
        />
        <br />
        <button className="Register__form--button" type="submit">
          SUBMIT
        </button>
      </form>
      <div className="Register__image .Register">
        {userImage === "" || userImage === undefined ? (
          <span></span>
        ) : (
          <img className="Register__image--img" src={userImage} alt="User profile" />
        )}
      </div>
    </div>
  );
}
