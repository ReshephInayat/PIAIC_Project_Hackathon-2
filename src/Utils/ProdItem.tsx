import React from "react";
import Image from "next/image";

export default function ProdItem({ image, scr, name, type, price }: any) {
  return (
    <div>
      <div className="hover:scale-110 transform duration-300">
        {
          (image = (
            <Image
              src={`/${scr}`}
              alt="image"
              width={400}
              height={400}
              className="w-full h-full object-cover "
            />
          ))
        }
        <h1 className="text-xl font-bold pt-2">{name}</h1>
        <h1 className="text-lg font-bold pt-1 opacity-40 ">{type}</h1>
        <h1 className="text-2xl ">{price}</h1>
      </div>
    </div>
  );
}
