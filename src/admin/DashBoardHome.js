import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import allProducts from "../Utils/FetchAllProducts";

const DashBoardHome = () => {
  const [productLength, setProductLength] = useState(null);

  //Product Length
  const fetcthProductLength = async () => {
    setProductLength(await allProducts());
    getAuth();
  };
  const users = auth;
  console.log(users);
  useEffect(() => {
    fetcthProductLength();
  }, []);

  return (
    <div className="w-full flex  justify-evenly p-5" style={{ height: "30vh" }}>
      <div className="shadow-lg shadow-red-200 w-1/4 mx-2   bg-red-50 flex justify-center    rounded-lg     p-8 items-center flex-col">
        <h1 className="text-5xl font-semibold text-red-500">1200</h1>
        <h1 className="text-3xl text-gray-700 mt-2">Total Users</h1>
      </div>
      <div className=" shadow-blue-200 w-1/4 mx-2  bg-blue-50 shadow-lg flex justify-center rounded-lg  p-8 items-center flex-col">
        <h1 className="text-5xl font-semibold text-blue-500">4599</h1>
        <h1 className="text-3xl text-gray-700 mt-2">Total Orders</h1>
      </div>
      <div className="shadow-lg shadow-yellow-200  w-1/4 mx-2  bg-yellow-50 flex justify-center  rounded-lg p-8 items-center flex-col">
        <h1 className="text-5xl font-semibold text-yellow-500">250</h1>
        <h1 className="text-3xl text-gray-700 mt-2">Active Delivery</h1>
      </div>
      <div className="shadow-lg shadow-green-200  w-1/4 mx-2  bg-green-50 flex justify-center rounded-lg  p-8 items-center flex-col">
        <h1 className="text-5xl font-semibold text-green-500">
          {productLength?.length}
        </h1>
        <h1 className="text-3xl text-gray-700 mt-2">Total Products</h1>
      </div>
    </div>
  );
};

export default DashBoardHome;
