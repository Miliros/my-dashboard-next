"use client";
import { useAppSelector } from "@/store";
import { PokemonGrid } from "..";
import { useState, useEffect } from "react";

import React from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
  const favorites = useAppSelector((state) => Object.values(state.pokemons));
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '[]');
    setPokemons(Object.values(storedFavorites));
  }, []);
  
  return (
    <>
      {pokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h[60vh] items-center justify-center">
      <IoHeartOutline size={40} className="text-red-600" />
      <span className="flex items-center mt-3 font-semibold ">Add a pokemon to favorite! </span>
    </div>
  );
};
