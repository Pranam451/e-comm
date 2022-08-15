import React, { useState } from "react";

const SingleCartItems = ({ item }) => {
  const [quanity, setquanity] = useState(1);

  const handleIncrement = (a) => {
    setquanity(quanity + 1);
  };
  const handleDecrement = () => {
    if (quanity > 1) {
      setquanity(quanity - 1);
    } else {
      setquanity(1);
    }
  };
  console.log();
  return (
    <div className="cartItem flex justify-between items-center py-2 border-b">
      <div className="w-1/4">
        <img src={item.img} className="w-24 mx-auto" alt="" />
      </div>
      <div className="w-1/3">
        <h1 className="text-lg">{item.name}</h1>
        <p className="text-md my-1">Black Color</p>
      </div>

      <div className="w-1/3">
        <h1 className="text-lg">{item.price}</h1>
      </div>
      <div className="w-1/3">
        <div className="w-50 flex">
          <button className="border px-2  text-2xl" onClick={handleDecrement}>
            -
          </button>
          <p className="border px-2  text-2xl">{quanity}</p>
          <button className="border px-2  text-2xl" onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
      <div className="w-1/3">
        <p>{}</p>
      </div>
      <div className="w-1/3">
        <h1 className="text-lg">Remove</h1>
      </div>
    </div>
  );
};

export default SingleCartItems;
