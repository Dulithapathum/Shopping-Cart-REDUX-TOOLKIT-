import React from "react";
const Cart = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-10 uppercase">
        My Cart
      </h1>
      <div className="w-[1200px] mx-auto mt-10">
        <div className="flex my-2 justify-between items-center px-3 py-1 border-1 border-amber-500 rounded">
          <div className="flex  items-center gap-5">
            <img
              src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg"
              alt=""
              className="w-20 h-20"
            />
            <h1 className="font-bold text-xl capitalize">
              Womens T Shirt Cotton Short
            </h1>
          </div>
          <div className="flex gap-2">
            <button className="w-6 h-6 border-1 border-amber-500 text-amber-500  flex  justify-center  text-xl font-bold hover:bg-amber-500 hover:text-white transition-colors duration-300 cursor-pointer">
              -
            </button>
            <p className="w-6 h-6   text-amber-500 flex justify-center items-center text-xl font-bold">
              1
            </p>
            <button className="w-6 h-6 border-1 border-amber-500 text-amber-500 p-2  flex justify-center items-center text-xl font-bold hover:bg-amber-500 hover:text-white transition-colors duration-300 cursor-pointer">
              +
            </button>
          </div>
          <div className="flex  gap-16 items-center">
            <p className="text-lg font-bold">200</p>
            <button className="border-1 text-red-500 hover:text-white hover:bg-red-500 py-1 px-5 rounded text-lg font-bold transition-colors duration-300 cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto">
        <div className="bg-amber-500 w-full h-[2px] my-2"></div>
        <h1 className="text-3xl font-bold text-amber-500">
          Total Price : RS.1300.00
        </h1>
      </div>
    </div>
  );
};

export default Cart;
