import Image from "next/image";
import React from "react";

export default function Events() {
  return (
    <div className="h-full bg-zinc-800 w-full ">
      <h1 className="text-white text-center text-xl md:text-2xl font-bold">
        Promotions
      </h1>
      <h1 className="text-white text-center  text-2xl md:text-4xl font-bold pt-5 pb-5">
        Our Promotions Events
      </h1>
      {/* <section className="flex flex-col-2  justify-evenly items-center gap-10  pt-20  h-[75%] w-full    ">
        <div>
          <figure className="bg-white w-[200%] h-52 flex justify-evenly ">
            <h1>Hwllo</h1>
            <div>
              <Image
                src={"/header.webp"}
                alt="image"
                width={400}
                height={400}
                className="w-[100%] h-[100%] "
              />
            </div>
          </figure>
          <figure className="bg-white w-[200%] h-52 flex justify-evenly ">
            <h1>Hwllo</h1>
            <div>
              <Image
                src={"/header.webp"}
                alt="image"
                width={400}
                height={400}
                className="w-[100%] h-[100%] "
              />
            </div>
          </figure>
        </div>
        <div className="bg-white w-100 h-[92%]">ihuhoh</div>
        <div className="bg-white w- h-[92%]">ihuhoh</div>
      </section> */}
      <section className="flex flex-col lg:flex-row  mx-10 overflow-x-hidden justify-center items-center gap-10">
        {/* Left */}
        <div>
          <div className=" bg-[#a4abab] flex flex-nowrap px-5">
            <h1 className=" text-4xl font-bold">
              Get Up to 60% <br />{" "}
              <span className="text-2xl font-medium">
                For The Summer Season
              </span>{" "}
            </h1>
            <Image
              src={"/header.webp"}
              alt="image"
              width={200}
              height={300}
              className="h-1/2 object-cover flex-col"
            />
          </div>
          <div className=" bg-[#a4abab] flex my-4">
            <h1 className=" text-4xl font-bold">
              Get Up to 60% <br />{" "}
              <span className="text-2xl font-medium">
                For The Summer Season
              </span>{" "}
            </h1>
            <Image
              src={"/header.webp"}
              alt="image"
              width={200}
              height={300}
              className="h-1/2 object-cover"
            />
          </div>
        </div>

        {/* Right */}

        <div className=" md:grid grid-cols-2 md:gap-y-5 gap-5 w-[50%] h-auto">
          <div className=" bg-[#a4abab] flex  ">
            <Image
              src={"/header.webp"}
              alt="image"
              width={400}
              height={400}
              className=" object-cover"
            />
          </div>
          <div className=" bg-[#a4abab] flex  ">
            <Image
              src={"/header.webp"}
              alt="image"
              width={400}
              height={400}
              className=" object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
