import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  const getMenuData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => setMenu(res.data.data.Data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>menu page</h1>
      {menu.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <img width={"40px"} src={item.imageUrl} />
          <Link to={`/menu/${item.id}`}>
            <button>detail</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
