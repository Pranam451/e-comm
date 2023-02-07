import { async } from "@firebase/util";
import React, { useEffect, useState } from "react";
import allProducts from "../Utils/FetchAllProducts";

const Product = () => {
  const [product, setProduct] = useState();
  const FetchProduct = async () => {
    setProduct(await allProducts());
  };
  console.log(product);
  useEffect(() => {
    FetchProduct();
  }, []);

  return (
    <div className="w-1/2 shadow-md rounded">
      <h1 className="text-center py-2 shadow text-1xl bg-slate-100">
        All Products
      </h1>
      <div className=" overflow-y-scroll" style={{ height: "70vh" }}>
        {product?.map((item) => {
          return (
            <div className="grid grid-cols-6 gap-6  py-2 px-2 items-center justify-between border-b border-gray-200">
              {/* <h1 className="hidden">{(item.key = item.id)}</h1> */}
              <img src={item.img} className=" w-15" alt="" />
              <h1 className="text-1xl">{item.name}</h1>
              <h1 className="text-1xl">{item.rating}</h1>
              <h1 className="text-1xl">{item.price}</h1>
              <div className="flex gap-1">
                <button className="bg-blue-500 px-3 py-1 rounded text-white">
                  Edit
                </button>
                <button className="bg-red-500 px-2 py-1 rounded text-white">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
