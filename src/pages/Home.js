import React, { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import Menu from "../components/Menu";
import fetchProductByCatergory from "../Utils/FetchProductByCategory";
import allProducts from "../Utils/FetchAllProducts";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase";

const Home = () => {
  const [products, setProducts] = useState(null);
  // const [catergory, setCatergory] = useState("all");
  // const [filter, setFilter] = useState("name");
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const fetchProduct = async () => {
    // if (catergory === "all") {
    setProducts(await allProducts());
    // } else {
    // setProducts(await fetchProductByCatergory(catergory));
    // }
  };

  useEffect(() => {
    fetchProduct();
  });
  return (
    <div>
      {/* <Menu setCatergory={setCatergory} setFilter={setFilter} /> */}
      <div className="w-full grid grid-cols-5 gap-3 px-20">
        {products?.map((product) => {
          return (
            <SingleProduct user={user} product={product} key={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
