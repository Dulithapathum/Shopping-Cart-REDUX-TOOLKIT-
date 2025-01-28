import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const { id, title, price, category, image } = item;
  return (
    <div
      key={id}
      className="w-[280px] h-[350px]  my-10 p-3 flex flex-col items-center justify-between  hover:shadow-xl transition-shadow duration-300 border-1 border-amber-500 rounded-xl cursor-pointer"
    >
      <div className="w-30 h-40 ">
        <img src={image} alt={title} className=" w-full h-full object-center" />
      </div>
      <div
        className="flex flex-col items-center gap-1
      "
      >
        <p className="text-amber-500 uppercase">{category}</p>
        <h2 className="font-bold capitalize text-xl text-center">{title}</h2>
        <p className="text-red-500 ">RS .{price}</p>
      </div>
      <button
        className="bg-white py-1 px-3 border-1  text-amber-500 font-bold hover:text-white hover:bg-amber-500 hover:border-1 transition-colors duration-300"
        onClick={() => {
          dispatch(addToCart(item));
        }}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Card;
