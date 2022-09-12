import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";

export default function Login() {
  const [loginUser, setLoginUser] = useState();

  async function logUser(event) {
    event.preventDefault();

    setLoginUser({ ...loginUser });

    repositoryManagementApi.login(loginUser);
  }

  return (
    <div className="Login">
      <form onSubmit={logUser}>
        Email:
        <input
          type="text"
          name="email"
          onChange={(event) => {
            setLoginUser({ ...loginUser, email: event.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="password"
          name="password"
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
