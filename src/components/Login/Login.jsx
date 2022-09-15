import { useState } from "react";
import { repositoryManagementApi } from "../Api/repositoryManagementApi";
import "./Login.css";

export default function Login(props) {
  const [loginUser, setLoginUser] = useState();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  function handleChange() {
    setLoginInfo({ email: "", password: "" });
  }

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
      handleChange();
      alert("Successfully logged in!");
    }
  }

  return (
    <div className="Login">
      <h1 className="Login__h1">Login</h1>
      <form className="Login__form" onSubmit={logUser}>
        <input
          className="Login__form--input"
          type="email"
          name="email"
          required={true}
          placeholder="Email"
          value={loginInfo.email}
          onChange={(event) => {
            setLoginUser({ ...loginUser, email: event.target.value });
            setLoginInfo({ ...loginInfo, email: event.target.value });
          }}
        />
        <br />
        <input
          className="Login__form--input"
          type="password"
          name="password"
          required={true}
          placeholder="Password"
          value={loginInfo.password}
          onChange={(event) => {
            setLoginUser({ ...loginUser, password: event.target.value });
            setLoginInfo({ ...loginInfo, password: event.target.value });
          }}
        />
        <br />
        <button className="Login__form--button" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
