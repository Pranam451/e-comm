import React, { useState } from "react";
import CategoryButton from "./common/CategoryButton";

const Menu = ({ setCatergory }) => {
  return (
    <div className="w-full py-3 flex text-lg font-medium justify-center">
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
    </div>
  );
};

export default Menu;
