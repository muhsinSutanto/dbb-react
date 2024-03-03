import axios from "axios";
import { useState } from "react";

const AddMenu = () => {
  const [menu, setMenu] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    type: "main-dish",
  });

  const handleChange = (e) => {
    setMenu({
      ...menu,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("access_token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const payload = {
      name: menu.name,
      description: menu.description,
      imageUrl: menu.imageUrl,
      price: parseInt(menu.price),
      type: menu.type,
    };

    axios
      .post("https://api.mudoapi.tech/menu", payload, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Add Menu</h1>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        id=""
        placeholder="name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="description"
        id=""
        placeholder="description"
      />
      <input
        onChange={handleChange}
        type="text"
        name="imageUrl"
        id=""
        placeholder="image url"
      />
      <input
        onChange={handleChange}
        type="text"
        name="price"
        id=""
        placeholder="price"
      />
      <select onChange={handleChange} name="type">
        <option value="main-dish">Makanan</option>
        <option value="beverage">Minuman</option>
      </select>
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default AddMenu;
