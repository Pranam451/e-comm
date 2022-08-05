import React from "react";
import { BiBag, IcBaselineStarRate } from "../icons/Icons";

import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <div className="w-full border  mx-2 my-2 shadow-lg px-2 py-2 rounded-md">
        <img src={product.img} alt="" className="w-full " />
        <h1 className="text-2xl font-semibold  mt-3 uppercase">
          {product.name}
        </h1>
        <Rating
          name="size-small"
          className="mt-1"
          readOnly
          defaultValue={product.rating}
        />
        <div className="btn-group mb-2 flex w-full justify-between">
          <h1 className="text-2xl  uppercase">₹{product.price}</h1>
          <button className="bg-green-600 px-2 rounded-sm">
            <BiBag className="text-white" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
