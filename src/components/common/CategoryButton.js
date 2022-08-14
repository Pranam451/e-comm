import React from "react";

const CategoryButton = (props) => {
  return (
    <button
      {...props}
      className="mx-2 hover:bg-gray-900 hover:text-white py-1 px-2 rounded-md"
    >
      {props.category}
    </button>
  );
};

export default CategoryButton;
