import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import SingleCartItems from "../components/SingleCartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const allItems = cartItems.cart;
  console.log(allItems.length);
  const cartLength = allItems.length;
  return (
    <div className="w-full px-20 mt-5 ">
      <header className=" border-b border-black ">
        <h1 className="text-4xl font-semibold">My Cart</h1>
        <p className="text-lg text-gray-700 my-2">
          Total <span>{cartLength}</span> items are in cart
        </p>
      </header>
      <div className="cartItemDiv">
        {allItems.map((item) => {
          return <SingleCartItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
