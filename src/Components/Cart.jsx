// Cart Component - Displays items in the cart
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/CartSlice";

const Cart = () => {
  const dispatch = useDispatch(); // Allows dispatching actions
  const cart = useSelector((state) => state.cart.cart); // Selects cart state from the Redux store

  // Calculates total price of items in the cart
  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-10 uppercase">
        My Cart
      </h1>
      <div className="w-[1200px] mx-auto mt-10">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex my-2 justify-between items-center px-3 py-1 border-1 border-amber-500 rounded"
          >
            <div className="flex items-center gap-5">
              <img src={item.image} alt={item.title} className="w-20 h-20" />
              <h1 className="font-bold text-xl capitalize">{item.title}</h1>
            </div>

            <div className="flex w-[400px] justify-between items-center">
              <div className="flex gap-1 items-center">
                <button
                  className="w-6 h-6 border-1 border-amber-500 text-amber-500 font-bold hover:bg-amber-500 hover:text-white transition-colors duration-300"
                  onClick={() => dispatch(decrementQuantity(item.id))} // Decrements item quantity
                >
                  -
                </button>
                <p className="w-6 h-6 text-amber-500 flex justify-center items-center text-xl font-bold">
                  {item.quantity}
                </p>
                <button
                  className="w-6 h-6 border-1 border-amber-500 text-amber-500 font-bold hover:bg-amber-500 hover:text-white transition-colors duration-300"
                  onClick={() => dispatch(incrementQuantity(item.id))} // Increments item quantity
                >
                  +
                </button>
              </div>
              <p className="text-lg font-bold">
                RS. {item.price * item.quantity}
              </p>
              <button
                className="border-1 text-red-500 hover:text-white hover:bg-red-500 py-1 px-5 rounded text-lg font-bold transition-colors duration-300"
                onClick={() => dispatch(removeFromCart(item.id))} // Removes item from cart
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[1200px] mx-auto">
        <div className="bg-amber-500 w-full h-[2px] my-2"></div>
        <h1 className="text-3xl font-bold text-amber-500">
          Total Price: RS. {getTotalPrice().toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
