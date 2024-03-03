import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const access_token = localStorage.getItem("access_token");

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const getData = () => {
    const access_token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJ1c2VybmFtZSI6IiIsInVzZXJJZCI6IjMyN2YwMjMyLTg2MDItMTFlZS1iNDVlLWY0YTgwZGE4YmE4MCIsImJyYW5jaElkIjoiYTMzZDk1NDctODA4YS0xMWVlLTllZjktZjRhODBkYThiYTgwIiwiZW1haWwiOiJyZGhtdWhhbW1hZDU3QGdtYWlsLmNvbSIsInJvbGVOYW1lIjoiY3VzdG9tZXIifX0.H2-0bcpqcKOBuOZ7XRfLVRSlD66u3Y-Z-dWp3Cb1JOo";

    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    axios
      .get(
        "http://193.203.161.17:3000/main/transaction/list-product?search&serviceName&unitType=",
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
