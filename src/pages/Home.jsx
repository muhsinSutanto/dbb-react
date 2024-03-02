import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const Home = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  return (
    <Layout>
      {access_token ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to={"/login"}>
          <h1>Login</h1>
        </Link>
      )}

      <h1>ini home page</h1>
    </Layout>
  );
};

export default Home;
