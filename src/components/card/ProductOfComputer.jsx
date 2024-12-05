import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductOfComputer(props) {
  const navigate = useNavigate();

  const handleCategoryClick = (type) => {
    navigate(`category/${type}`);
  };
  

  return (
    <div onClick={() => handleCategoryClick(props.type)} className=" w-full aspect-square  rounded-xl  shadow-md transform transition duration-300 hover:-translate-y-2">
      <img src={props.img} alt="photo" />
        <p className="text-black text-[.7rem] lg:text-sm text-center z-10 absolute bottom-2 left-0 right-0">
            {props.name}
        </p>
    </div>
  );
}
