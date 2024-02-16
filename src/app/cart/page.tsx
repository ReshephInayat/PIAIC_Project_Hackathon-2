import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { RiShoppingBagLine } from "react-icons/ri";

export default function Cart() {
  return (
    <div className="pt-32 px-20 bg-zinc-800 text-white h-screen w-full">
      {/* <div className="flex items-center gap-4">
        <h1 className=" md:text-4xl font-bold">Shoping Cart</h1>
        <div>
          <BiShoppingBag className="  md:w-14 md:h-14" />
        </div>
      </div> */}
      <div className="flex justify-center pt-10">
        <RiShoppingBagLine className="md:w-36 md:h-36 w-20 h-20" />
      </div>
      <h1 className="md:text-4xl text-2xl text-center">
        Your Shoping Bag is Empty
      </h1>
    </div>
  );
}
