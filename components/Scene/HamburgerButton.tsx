import React from "react";
import { IoMenuSharp } from "react-icons/io5";

const HamburgerButton = () => {
  return (
        <div className="flex pl-3 items-center align-middle"> 
          <IoMenuSharp size={50}/>
        </div>
  );
};

export default HamburgerButton;
