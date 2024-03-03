import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [status, setStatus] = useState("");
  const [pagination, setPagination] = useState({
    perPage: 0,
    total: 0,
    currentPage: 1,
    previousPage: 0,
    nextPage: 0,
  });

  const getMenuData = () => {
    axios
      .get(`https://api.mudoapi.tech/menus?page=${pagination.currentPage}`)
      .then((res) => {
        setMenu(res.data.data.Data);
        setPagination({
          perPage: res.data.data.perPage,
          total: res.data.data.total,
          currentPage: res.data.data.currentPage,
          previousPage: res.data.data.previousPage,
          nextPage: res.data.data.nextPage,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.previousPage,
    });
  };

  const handleNext = () => {
    setPagination({
      ...pagination,
      currentPage: pagination.nextPage,
    });
  };

  // **pertama mounting
  useEffect(() => {
    getMenuData();
  }, []);

  // **ketika ada perubahan currentPage maka mengambil data
  useEffect(() => {
    getMenuData();
  }, [pagination.currentPage]);

  console.log(pagination);

  return (
    <div>
      <Navbar />
      <h1>menu page</h1>
      <Link to={"/add-menu"}>Add Menu</Link>
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
      <div>
        <button disabled={pagination.currentPage === 1} onClick={handleBack}>
          back
        </button>
        <button disabled={!pagination.nextPage} onClick={handleNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default Menu;
