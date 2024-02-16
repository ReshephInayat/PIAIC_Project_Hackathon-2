import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className='pt-28 md:px-20 bg-zinc-800 text-white h-full w-full"'>
      <h1 className="text-center font-bold  text-3xl px-4 md:text-6xl pt-10 pb-10 ">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] text-white ">
          <div>
            <div className="bg-white bg-opacity-20 hover:bg-[#737677] hover:text-black hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
              {/* <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" /> */}
              <h1 className="text-[20px] md:text-[15px] mt-[1.5rem] mb-[1.5rem]">
                This piece is ethically crafted in our small family-owned
                workshop in Peru with unmatched attention to detail and care.
                The Natural color is the actual natural color of the fiber,
                undyed and 100% traceable.
              </h1>
            </div>
          </div>
          <div>
            <div className="bg-white bg-opacity-20 hover:bg-[#737677] uppercase font-semibold text-center p-[2rem]">
              {/* <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" /> */}

              <Image
                src={"/aboutwebp.webp"}
                alt="image"
                height={300}
                width={300}
                className={`h-auto object-cover w-full `}
              />
            </div>
          </div>

          <div>
            <div className="bg-white bg-opacity-20 hover:bg-[#737677] hover:text-black hover:scale-110 transform transition-all duration-300  uppercase font-semibold text-center p-[2rem]">
              {/* <ChevronDoubleUpIcon className="w-[6rem] h-[6rem] mx-auto text-white" /> */}
              <h1 className="text-[20px] md:text-[15px] mt-[1.5rem] mb-[1.5rem]">
                Using Good Quality Materials 100% Handmade Products Discount for
                Bulk Orders <br />
                Modern Fashion Design
              </h1>
              <button className="mb-5 bg-[#22324D] border-2 border-solid px-8 py-2 text-white">
                See All Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
