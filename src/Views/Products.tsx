import React from "react";
import Image from "next/image";
export default function Products() {
  return (
    <div className=" bg-zinc-800 text-white h-full w-full">
      <div>
        <h1 className="text-center font-bold text-xl ">PRODUCTS</h1>
        <h1 className="text-center font-bold text-2xl md:text-4xl pt-2  ">
          Check What We Have
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] h-[60%] mx-auto items-center gap-[3rem] mt-[2rem] text-white ">
        <div className="flex flex-wrap">
          <div className="bg-white bg-opacity-20 hover:bg-[#737677] hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem] hover:text-black">
            <Image
              src={"/pro1.png"}
              alt="image"
              height={300}
              width={300}
              className="h-[320px] object-cover"
            />
            <h1 className="text-2xl pt-1">Brushed Raglan Sweatshirt</h1>
            <p className="text-xl">$195</p>
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 hover:bg-[#737677] hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem] hover:text-black">
            <Image
              src={"/prod2.png"}
              alt="image"
              height={300}
              width={300}
              className="h-[320px] object-cover"
            />
            <h1 className="text-2xl pt-1">Cameryn Sash Tie Dress</h1>
            <p className="text-xl">$545</p>
          </div>
        </div>
        <div>
          <div className="bg-white  bg-opacity-20 hover:bg-[#737677] hover:scale-110 transform transition-all duration-500  uppercase font-semibold text-center p-[2rem] hover:text-black">
            <Image
              src={"/prod3.png"}
              alt="image"
              height={300}
              width={300}
              className="h-[320px] object-cover"
            />
            <h1 className="text-2xl pt-1">
              Flex <br /> Sweatshirt
            </h1>
            <p className="text-xl">$175</p>
          </div>
        </div>
      </div>
    </div>
  );
}
