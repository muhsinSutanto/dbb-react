import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuDetail = () => {
  const [menu, setMenu] = useState({});

  const { id } = useParams();

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => setMenu(res?.data?.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMenuDetail();
  }, []);

  return (
    <div>
      <h1>Menu detail</h1>
      <h1>nama menu : {menu?.name}</h1>
      <h1>deskripsi : {menu?.description}</h1>
      <img src={menu?.imageUrl} />
    </div>
  );
};

export default MenuDetail;
