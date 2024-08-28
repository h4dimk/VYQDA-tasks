import React from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex items-center">
      <FaBars className="text-white text-xl cursor-pointer mr-4" />
      <h1 className="text-white text-3xl font-normal">Notes</h1>
    </nav>
  );
};

export default Navbar;
