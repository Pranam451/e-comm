import React from "react";
import { BiBag, IcBaselineStarRate } from "../icons/Icons";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const SingleProduct = ({ product, user }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const allItems = cartItems.cart;

  return (
    <div className="w-full border flex flex-col justify-between  mx-2 my-2 shadow-lg px-2 py-2 rounded-md">
      <Link to={`product/${product.id}`}>
        <img src={product.img} loading="lazy" alt="" className="w-full " />
        {/* </Link> */}
        <h1 className="text-2xl font-semibold  mt-3 uppercase">
          {product.name}
        </h1>
        <Rating
          name="size-small"
          className="mt-1"
          readOnly
          defaultValue={product.rating}
        />
      </Link>

      <h1 className="text-2xl  uppercase">₹{product.price}</h1>
      <div className="flex w-full justify-end">
        {allItems && allItems.find((p) => p.id === product.id) ? (
          user ? (
            <Link to="/Cart" className="w-fit">
              <button className="bg-sky-600  px-2 text-white text-1xl py-1 mt-3 justify-between items-center rounded-sm flex">
                Go To Bag
                <BiBag className="text-white" />
              </button>
            </Link>
          ) : (
            <Link to="/login" className="w-fit">
              <button className="bg-sky-600  px-2 text-white text-1xl py-1 mt-3 justify-between items-center rounded-sm flex">
                Go To Bag
                <BiBag className="text-white" />
              </button>
            </Link>
          )
        ) : (
          <button
            className="bg-green-600 w-fit px-2 text-white text-1xl py-1 mt-3 justify-between items-center rounded-sm flex"
            onClick={() => dispatch(addToCart(product))}
          >
            Add To Bag
            <BiBag className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
