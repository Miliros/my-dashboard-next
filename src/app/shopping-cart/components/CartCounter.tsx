"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
// import {
//   addOne,
//   addOneBag,
//   addOneCap,
//   addOneTshirt
// } from "@/store/counter/counterSlice";
import { IoCart } from "react-icons/io5";
import { BagPokemon } from "@/app/pokemons/components/BagPokemon";
import { CapPokemon } from "@/app/pokemons/components/CapPokemon";
import { TshirtPokemon } from "@/app/pokemons/components/TshirtPokemon";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  return (
    <>
    

      <div className="flex space-x-5">
        <TshirtPokemon />
        <BagPokemon />
        <CapPokemon />
       
      </div>
    </>
  );
};
