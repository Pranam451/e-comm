import { Link, NavLink } from "react-router-dom";
import { BiBag } from "../icons/Icons";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between shadow-lg px-10 items-center">
      <Link to="/">
        <h1 className="text-3xl py-3  font-bold">Ecommerce</h1>
      </Link>
      <Link to="/cart">
        <BiBag className="text-black" />
      </Link>
    </div>
  );
};

export default Navbar;
