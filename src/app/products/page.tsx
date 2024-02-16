import ProdItem from "@/Utils/ProdItem";
import React from "react";

export default function page({ props }: any) {
  return (
    <div className="pt-10 px-20 bg-zinc-800 text-white  w-full">
      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div>
          <ProdItem
            image
            scr="pro1.png"
            name="Brushed Raglan Sweatshirt"
            type="Sweater"
            price="$195"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod3.png"
            name="Flex Sweatshirt"
            type="Sweater"
            price="$175"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="pro1.png"
            name="Brushed Raglan Sweatshirt"
            type="Sweater"
            price="$195"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod3.png"
            name="Flex Sweatshirt"
            type="Sweater"
            price="$175"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-center pt-8 pb-8">
        <div>
          <ProdItem
            image
            scr="prod5.png"
            name="Pink Fleece Sweatpantst"
            type="Pants"
            price="$195"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod6.png"
            name="Lite Sweatpants"
            type="Pants"
            price="$150"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod7.png"
            name="Imperial Alpaca Hoodie"
            type="Jacket"
            price="525"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod8.png"
            name="Flex Push Button Bomber"
            type="Jacket"
            price="$225"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 justify-center">
        <div>
          <ProdItem
            image
            scr="pro1.png"
            name="Brushed Raglan Sweatshirt"
            type="Sweater"
            price="$195"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod3.png"
            name="Flex Sweatshirt"
            type="Sweater"
            price="$175"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="pro1.png"
            name="Brushed Raglan Sweatshirt"
            type="Sweater"
            price="$195"
          />
        </div>
        <div>
          <ProdItem
            image
            scr="prod3.png"
            name="Flex Sweatshirt"
            type="Sweater"
            price="$175"
          />
        </div>
      </div>

    </div>
  );
}
