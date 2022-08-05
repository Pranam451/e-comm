import React, { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase";
import SingleProduct from "../components/SingleProduct";

const Home = () => {
  const [products, setProducts] = useState(null);

  const fetchAllProducts = async () => {
    const q = collection(db, "users");
    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });

    setProducts(items);
  };

  console.log(products);
  useEffect(() => {
    fetchAllProducts();
  }, []);
  return (
    <div>
      {/* <Carousel /> */}
      <div className="w-full flex justify-evenly px-20">
        {products?.map((product) => {
          return <SingleProduct product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
