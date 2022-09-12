import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function Register() {
  const [registerUser, setRegisterUser] = useState();

  async function addNewUser(event) {
    setRegisterUser({ ...registerUser });
    repositoryManagementApi.createUser(registerUser);
  }

  return (
    <div className="Register">
      <form onSubmit={addNewUser}>
        Name:
        <input
          type="text"
          name="name"
          onChange={(event) => {
            setRegisterUser({ ...registerUser, name: event.target.value });
          }}
        />
        <br />
        Email:
        <input
          type="text"
          name="email"
          onChange={(event) => {
            setRegisterUser({ ...registerUser, email: event.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
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
