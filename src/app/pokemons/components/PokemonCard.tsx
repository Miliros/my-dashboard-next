"use client";

import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemonsSlice";
import { useState, useEffect } from "react";

interface Props {
  pokemon: SimplePokemon;
}
export const PokemonCard = ({ pokemon }: Props) => {
  const { name, id } = pokemon;
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    setIsFavorite(!!storedFavorites[id]);
    setLoading(false);
  }, [id]);

  const onToggle = () => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );
    const updatedFavorites = { ...storedFavorites }; // Copia los favoritos existentes

    if (isFavorite) {
      delete updatedFavorites[id];
    } else {
      updatedFavorites[id] = pokemon;
    }

    localStorage.setItem("favorite-pokemons", JSON.stringify(updatedFavorites)); // Actualiza localStorage
    setIsFavorite(!isFavorite);
    
  };
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            priority={false}
            className=" h-26 object-contain"
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`/pokemons/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="border-b">
          <div
            onClick={onToggle}
            className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
          >
            <div className="text-red-700 flex justify-center">
              { isFavorite ? (
                <IoHeart size={20} />
              ) : (
                <IoHeartOutline size={20} />
              )}
            </div>
            <div className="pl-3  justify-center items-center flex content-center">
              {!loading ? (
                isFavorite ? (
                  <p className="text-sm font-medium text-gray-800 leading-none p-2 flex content-center">
                    Is favorite
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-800 leading-none p-2 flex content-center">
                    Not favorite
                  </p>
                )
              ) : ".."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
