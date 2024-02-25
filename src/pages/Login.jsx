import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        setNotif("login berhasil");
        const token = res?.data?.data?.token;
        localStorage.setItem("access_token", token);
        setLoading(false);
        setTimeout(() => {
          navigate("/menu");
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        setNotif(err?.response?.data?.message);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => navigate(-1)}>Back</button>
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

      <button disabled={loading ? true : false} onClick={handleLogin}>
        {loading ? "loading..." : "Login"}
      </button>
    </div>
  );
};

export default Login;
