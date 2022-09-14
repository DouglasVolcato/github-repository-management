import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import "./Register.css";

export default function Register() {
  const [registerUser, setRegisterUser] = useState();

  async function addNewUser(event) {
    event.preventDefault();
    setRegisterUser({ ...registerUser });
    const apiAnswer = await repositoryManagementApi.createUser(registerUser);

    try {
      if (apiAnswer.message.includes("Email already exists in database")) {
        alert("Email already registrated.");
      }
    } catch (err) {
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
          onChange={(event) => {
            setRegisterUser({ ...registerUser, name: event.target.value });
          }}
        />
        <br />
        <input
          className="Register__form--input"
          type="email"
          name="email"
          required={true}
          placeholder="Email"
          onChange={(event) => {
            setRegisterUser({ ...registerUser, email: event.target.value });
          }}
        />
        <br />
        <input
          className="Register__form--input"
          type="password"
          name="password"
          required={true}
          placeholder="Password"
          onChange={(event) => {
            setRegisterUser({ ...registerUser, password: event.target.value });
          }}
        />
        <br />
        <button className="Register__form--button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
