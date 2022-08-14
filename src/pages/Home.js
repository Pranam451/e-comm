import React, { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import Menu from "../components/Menu";

import fetchProductByCatergory from "../Utils/FetchProductByCategory";
import allProducts from "../Utils/FetchAllProducts";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/features/productSlice";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [catergory, setCatergory] = useState("all");
  const dispatch = useDispatch();
  const num = useSelector((state) => state.products.value);

  console.log(num);

  const fetchProduct = async () => {
    if (catergory === "all") {
      setProducts(await allProducts());
    } else {
      setProducts(await fetchProductByCatergory(catergory));
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [catergory]);

  return (
    <div>
      {/* <Carousel /> */}
      {/* <button onClick={() => setCatergory("earphone")}>TV</button> */}
      <Menu setCatergory={setCatergory} />
      <div className="w-full grid grid-cols-5 gap-3 px-20">
        {products?.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
      <button
        className="bg-black text-white text-3xl p-4 rounded-md"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <p className="text-3xl text-center">{num}</p>
      <button
        className="bg-black text-white text-3xl p-4 rounded-md"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Home;
