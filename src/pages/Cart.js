import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import SingleCartItems from "../components/SingleCartItems";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const allItems = cartItems.cart;

  const cartLength = allItems.length;
  //
  const TotalCartPrice = allItems
    ?.map((product) => (product?.Newprice ? product.Newprice : product.price))
    ?.reduce((acc, crr) => {
      let sum = acc + crr;
      return sum;
    }, 0);

  return (
    <div className="w-full px-20 mt-5 ">
      <header className=" border-b border-black ">
        <h1 className="text-4xl font-semibold">My Cart</h1>
        <p className="text-lg text-gray-700 my-2">
          Total <span>{cartLength}</span> items are in cart
        </p>
      </header>
      <div
        className="cartItemDiv overflow-y-scroll  "
        style={{ height: "60vh" }}
      >
        {allItems ? (
          allItems.map((item) => {
            return <SingleCartItems item={item} key={item.id} />;
          })
        ) : (
          <div>no item</div>
        )}
      </div>{" "}
      <div className="w-full text-right mt-5 ">
        <h1 className="font-sans text-3xl font-light">
          Total: {TotalCartPrice}
        </h1>
        <div className="flex items-center my-3 justify-end">
          <Link to="/">
            <button className="p-1 bg-transparent font-semibold text-green-600 outline outline-green-600 rounded-md">
              Back to Store
            </button>
          </Link>

          <button className=" cursor-not-allowed p-1 bg-green-600 ml-3 font-semibold text-white outline outline-green-600 rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
