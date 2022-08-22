import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

export const ProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const cartItems = useSelector((state) => state.cart);

  const allItems = cartItems.cart;

  const fetchProduct = async () => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    product && (
      <div className="w-full flex justify-evenly">
        <div className="w-1/2 px-28">
          <img src={product.img} alt="" className="w-full" />
        </div>
        <div className="w-1/2 py-10 px-10">
          <h1 className="text-black font-bold uppercase text-5xl ">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl">{product.description}</p>
          <Rating
            className="my-5"
            name="read-only "
            size="large"
            value={product.rating}
            readOnly
          />
          <h1 className="text-5xl text-black font-normal">₹{product.price}</h1>
          <div className="w-full">
            {allItems.find((p) => p.id === product.id) ? "hey" : "not"}
            <button
              className="bg-green-600 p-2 text-white rounded"
              onClick={() => dispatch(addToCart(product))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    )
  );
};
