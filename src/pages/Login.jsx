import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    }; //data yang akan di berikan ke api

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        setNotif("login berhasil").then((res) => navigate("/menu"));
        const token = res?.data?.data?.token;
        setTimeout(() => {
          navigate("/menu");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      {!!notif.length && <h1>{notif}</h1>}
      <input
        type="text"
        placeholder="username"
        onChange={handleUsernameChange}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordChange}
        value={password}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
