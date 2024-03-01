"use client";
import React from "react";
import { SimpleWidget } from "..";
import { IoCart } from "react-icons/io5";
import { title } from "process";
import { useAppSelector } from "@/store";
import  bagImageUrl from "../../app/pokemons/components/images/bag-poke.jpg";
import  capImageUrl from "../../app/pokemons/components/images/gorra-poke.jpg";
import  tshirtImageUrl from "../../app/pokemons/components/images/tshirt-poke.jpg";



export const WidgetGrid = () => {

  // const isCart = useAppSelector((state) => state.counter.count);
  const isCap = useAppSelector((state) => state.counter.cap);
  const isBag = useAppSelector((state) => state.counter.bag);
  const isTshirt = useAppSelector((state) => state.counter.tshirt);


  // const capImageUrl = "/path/to/bag/image.jpg";
  // const tshirtImageUrl = "/path/to/tshirt/image.jpg";


  return (
    <div className="flex flex-wrap p-4 items-center w-152 justify-center space-x-1">.
      <div className="w-72">
        <SimpleWidget
          title={`${isCap}`}
          subtitle="Summer cap"
          label="Cap"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
          imgSrc={bagImageUrl.src}
        
        />
      </div>
      <div className="w-72">
        <SimpleWidget
          title={`${isBag}`}
          subtitle="Beach Bag"
          label="Bag"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
          imgSrc={capImageUrl.src}
        />
      </div>
      <div className="w-72">
        <SimpleWidget
          title={`${isTshirt}`}
          subtitle="Sumer t-shirt"
          label="T-shirt"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
          imgSrc={tshirtImageUrl.src}
        />
      </div>
    </div>
  );
};
