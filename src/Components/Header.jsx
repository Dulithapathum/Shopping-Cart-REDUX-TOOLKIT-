// Header Component - Displays the navigation bar
import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart.cart); // Accesses cart state

  // Calculates total items in the cart
  const getTotalItems = () =>
    cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="w-full shadow-md bg-amber-300">
      <header className="w-[1200px] mx-auto h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Shopping Cart
        </Link>
        <Link to="/cart">
          <div className="flex relative cursor-pointer">
            <MdOutlineShoppingCart className="text-2xl" />
            <h2 className="absolute -top-2 -right-2 bg-black text-white rounded-full w-5 h-5 flex justify-center items-center">
              {getTotalItems()}
            </h2>
          </div>
        </Link>
      </header>
    </div>
  );
};

export default Header;
