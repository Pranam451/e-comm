import { Link, NavLink } from "react-router-dom";
import { BiBag, PhUserCircle, PhUserCirclePlus } from "../icons/Icons";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { async } from "@firebase/util";

const Navbar = () => {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex w-full justify-between shadow-lg px-10 items-center">
      <Link to="/">
        <h1 className="text-3xl py-3  font-bold">Ecommerce</h1>
      </Link>
      <div className="flex h-full w-9/12 items-center justify-end">
        <div className=" relative group">
          {user ? (
            <PhUserCircle className="text-black hover:text-white text-2xl hover:bg-gray-700 p-1 rounded-full" />
          ) : (
            <PhUserCirclePlus className="text-black hover:text-white text-2xl hover:bg-gray-700 p-1 rounded-full" />
          )}

          <div className="absolute w-max p-2  right-1 opacity-0 transition-all ease-in-out duration-300 backdrop-blur-sm bg-white/30 px-2 py-2 rounded-md group-hover:opacity-100 text-black">
            {user ? (
              <div>
                <h1>{user.email}</h1>
                <br></br>
                <button onClick={() => logout()}>Sign Out</button>
              </div>
            ) : (
              <div className="">
                <Link to="/register">Register</Link>
                <br></br>
                <hr />
                <Link to="/login">Log in</Link>
              </div>
            )}
          </div>
        </div>

        <Link to="/cart">
          <BiBag className="text-black hover:text-white text-2xl hover:bg-gray-700 p-1 rounded-full" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
