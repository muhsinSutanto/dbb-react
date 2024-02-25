import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      <Link to={"/menu"}>
        <p>Menu</p>
      </Link>
    </div>
  );
};

export default Navbar;
