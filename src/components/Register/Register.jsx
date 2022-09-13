import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

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
      <form onSubmit={addNewUser}>
        Name:
        <input
          type="text"
          name="name"
          required={true}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, name: event.target.value });
          }}
        />
        <br />
        Email:
        <input
          type="email"
          name="email"
          required={true}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, email: event.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          required={true}
          onChange={(event) => {
            setRegisterUser({ ...registerUser, password: event.target.value });
          }}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
