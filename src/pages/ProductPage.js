import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { Rating } from "@mui/material";
import AliceCarousel from "react-alice-carousel";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

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

  const handleDragStart = (e) => e.preventDefault();

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
        </div>
      </div>
    )
  );
};
