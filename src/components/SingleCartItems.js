import React from "react";

const SingleCartItems = ({ item }) => {
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
        <input type="number" name="" id="" />
      </div>
      <div className="w-1/3">
        <h1 className="text-lg">Remove</h1>
      </div>
    </div>
  );
};

export default SingleCartItems;
