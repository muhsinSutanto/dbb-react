import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      {access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={"/login"}>
          <h1>Login</h1>
        </Link>
      )}

      <h1>ini home page</h1>
    </div>
  );
};

export default Home;
