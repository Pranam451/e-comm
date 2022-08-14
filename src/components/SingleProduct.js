import React from "react";
import { BiBag, IcBaselineStarRate } from "../icons/Icons";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    // <Link to={`product/${product.id}`}>
    <div className="w-full border  mx-2 my-2 shadow-lg px-2 py-2 rounded-md">
      <img src={product.img} alt="" className="w-full " />
      <h1 className="text-2xl font-semibold  mt-3 uppercase">{product.name}</h1>
      <Rating
        name="size-small"
        className="mt-1"
        readOnly
        defaultValue={product.rating}
      />

      <h1 className="text-2xl  uppercase">₹{product.price}</h1>
      <div className="flex w-full justify-end">
        <button
          className="bg-green-600 w-1/2 px-2 text-white text-1xl py-1 mt-3 justify-between items-center rounded-sm flex"
          onClick={() => dispatch(addToCart(product))}
        >
          Add To Bag
          <BiBag className="text-white" />
        </button>
      </div>
    </div>
    // </Link>
  );
};

export default SingleProduct;
