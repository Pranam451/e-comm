import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  incrementQty,
  decrementQty,
} from "../redux/features/cartSlice";

const SingleCartItems = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem flex justify-between items-center py-2 border-b">
      <div className="w-1/4">
        <img src={item.img} className="w-24 mx-auto" alt="" />
      </div>
      <div className="w-1/3">
        <h1 className="text-lg">{item.name}</h1>
        <Link to={`../product/${item.id}`}>
          <p className="text-md text-blue-700 my-1">See Details</p>
        </Link>
      </div>

      <div className="w-1/3">
        <h1 className="text-lg">{item.price}</h1>
      </div>
      <div className="w-1/3">
        <div className="w-50 flex">
          <button
            className="border px-2  text-2xl"
            onClick={() => dispatch(decrementQty(item))}
          >
            -
          </button>
          <p className="border px-2  text-2xl">{item.qty}</p>
          <button
            className="border px-2  text-2xl"
            onClick={() => dispatch(incrementQty(item))}
          >
            +
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <p>{item?.Newprice ? item.Newprice : item.price}</p>
      </div>
      <div className="w-1/3">
        <button
          className="border border-gray-1 px-2 rounded bg-gray-400 py-1"
          onClick={() => dispatch(removeCartItem(item.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleCartItems;
