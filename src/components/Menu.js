import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import CategoryButton from "./common/CategoryButton";

const Menu = ({ setCatergory, setFilter }) => {
  return (
    <div className="w-full">
      <div className=" py-3 flex text-lg font-medium justify-center">
        <CategoryButton
          onClick={() => setCatergory("all")}
          category="All Products"
        />
        <CategoryButton
          onClick={() => setCatergory("earphone")}
          category="Earphones"
        />
        <CategoryButton
          onClick={() => setCatergory("tv")}
          category="Telivision"
        />
        <CategoryButton
          onClick={() => setCatergory("mobile")}
          category="Mobile"
        />
        <CategoryButton
          onClick={() => setCatergory("speaker")}
          category="Speaker"
        />
        <CategoryButton
          onClick={() => setCatergory("projector")}
          category="Projector"
        />
        <button className="group relative mx-2 hover:bg-gray-900 hover:text-white py-1 px-2 rounded-md">
          <h1>SortBy</h1>
          <div className="absolute w-max p-2 -right-48 -top-10  opacity-0 transition-all ease-in-out duration-300 backdrop-blur-sm bg-white/30 px-2 py-2 rounded-md group-hover:opacity-100 text-black">
            <h1 onClick={() => setFilter("featured")}>Featured</h1>
            <h1 onClick={() => setFilter("priceAsc")}>Price: Low to High</h1>
            <h1 onClick={() => setFilter("priceDsc")}>Price: High To Low</h1>
            <h1 onClick={() => setFilter("ratingDsc")}>
              Rating: Highest First
            </h1>
            <h1 onClick={() => setFilter("ratingAsc")}>Rating: Lowest First</h1>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Menu;
