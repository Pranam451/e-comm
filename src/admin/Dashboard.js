import React, { useState } from "react";
import DashBoardHome from "./DashBoardHome";
import Order from "./Order";
import Product from "./Product";
import SideBar from "./SideBar";
import Users from "./Users";

const Dashboard = () => {
  const [showOrder, setShowOrder] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showUsers, setShowUsers] = useState(false);

  const toggleOrder = () => {
    setShowOrder(!showOrder);
  };
  const toggleHome = () => {
    setShowHome(!showHome);
  };
  const toggleProduct = () => {
    setShowProduct(!showProduct);
  };
  const toggleUsers = () => {
    setShowUsers(!showUsers);
  };
  return (
    <div className="w-full flex">
      <div className=" w-2/12 p-4 min-h-screen shadow-lg ">
        <button
          onClick={toggleHome}
          className="w-full bg-blue-600 text-lg my-1 py-1 text-white rounded-md"
        >
          Dashboard
        </button>
        <button
          onClick={toggleOrder}
          className="w-full bg-blue-600 text-lg my-1 py-1 text-white rounded-md"
        >
          Orders
        </button>
        <button
          onClick={toggleProduct}
          className="w-full bg-blue-600 text-lg my-1 py-1 text-white rounded-md"
        >
          Products
        </button>
        <button
          onClick={toggleUsers}
          className="w-full bg-blue-600 text-lg my-1 py-1 text-white rounded-md"
        >
          Users
        </button>
      </div>
      <div className="w-10/12 px-5 flex flex-wrap ">
        <DashBoardHome />
        {showOrder ? <Order /> : null}
        {showProduct ? <Product /> : null}
        {showUsers ? <Users /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
