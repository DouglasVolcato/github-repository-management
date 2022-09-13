import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function Login(props) {
  const [loginUser, setLoginUser] = useState();

  async function logUser(event) {
    event.preventDefault();
    setLoginUser({ ...loginUser });
    const apiAnswer = await repositoryManagementApi.login(loginUser);

    try {
      if (apiAnswer.message.includes("Wrong password.")) {
        alert("Wrong password.");
      } else if (apiAnswer.message.includes("Email not found.")) {
        alert("Email not registered.");
      }
    } catch (err) {
      alert("Successfully logged in!");
    }
  }

  return (
    <div className="Login">
      <form onSubmit={logUser}>
        Email:
        <input
          type="email"
          name="email"
          required={true}
          onChange={(event) => {
            setLoginUser({ ...loginUser, email: event.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
          required={true}
          onChange={(event) => {
            setLoginUser({ ...loginUser, password: event.target.value });
          }}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
