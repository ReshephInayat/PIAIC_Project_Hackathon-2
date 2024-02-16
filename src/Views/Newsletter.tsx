import React from "react";
import { MdEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

export default function Newsletter() {
  return (
    <div className="pt-56 md:py-64 px-4 md:px-20 bg-zinc-800 text-white h-screen w-full">
      <h1 className="text-center text-3xl md:text-6xl ">
        Get The Latest Information About{" "}
      </h1>
      <div>
        <h1 className="text-center font-bold text-4xl md:text-5xl pt-5">
          Subscribe Our News Letter
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center pt-5 gap-5">
          <input
            type="text"
            className="md:px-20 py-1 bg-zinc-800 border-4 border-white px-2 text-xl md:text-2xl "
            placeholder="Enter Your Email !"
          />
          {/* <TfiEmail className='w-20 h-14' /> */}
          <button className="mb-5 bg-[#22324D] border-2 border-solid mt-5 flex items-center justify-center px-8 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
