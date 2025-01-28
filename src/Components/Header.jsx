import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full shadow-md bg-amber-300">
      <header className="w-[1200px] mx-auto   h-16 place-content-between  flex  items-center ">
        <Link to="/" className="text-2xl font-bold">
          Shopping Cart
        </Link>
        <Link to="/cart">
          <div className="flex relative cursor-pointer   ">
            <MdOutlineShoppingCart className="text-2xl " />
            <h2 className=" absolute -top-2 -right-2 bg-black text-white rounded-4xl w-5 h-5  flex place-content-center items-center ">
              2
            </h2>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
