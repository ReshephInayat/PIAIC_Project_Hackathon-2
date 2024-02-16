import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { HiFaceSmile, HiOutlineFaceSmile } from "react-icons/hi2";
import { RiShoppingBagLine } from "react-icons/ri";

export default function Kids() {
  return (
    <div className="pt-20 px-20 bg-zinc-800 text-white h-screen w-full">
      <div className="flex md:flex justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Kids </h1>
        <div>
          <BiShoppingBag className="w-14 h-14" />
        </div>
      </div>
      <div className="flex justify-center">
        <HiOutlineFaceSmile className="w-48 h-48 font-light" />
      </div>
      <h1 className="text-4xl text-center">Coming Soon</h1>
      <div className="flex justify-center pt-10">
        <Link href={"/"}>
          <button className="bg-white px-4 py-4 font-semibold text-black ">
            ← Visit Us Later
          </button>
        </Link>
      </div>
    </div>
  );
}
