import React, { useState } from "react";
import { CartCounter } from "../../shopping-cart/components/CartCounter";
import { IoCart } from "react-icons/io5";

export const metadata = {
  title: "Shopping Cart",
  description: "Carrito de compras",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col text-black p-2 items-center justify-center">
      <div className="flex items-center mb-10">
        <span className="text-4xl font-semibold text-gray-600 tracking-wide">
          Shopping Cart
        </span>
        <div className="ml-2">
          <IoCart size={30} className="text-green-600 " />
        </div>
      </div>

      <CartCounter value={20} />
    </div>
  );
}
