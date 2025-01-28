import React from "react";
import Card from "./Card";
import { products } from "../products";
const Products = () => {
  return (
    <div className=" w-[1200px] mx-auto flex flex-wrap justify-between ">
      {products.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
