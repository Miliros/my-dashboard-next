import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemon";
import { PokemonsReponse } from "../../pokemons/interfaces/pokemons-response";
import Image from 'next/image';
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";


export const metadata = {
  title: 'Pokemons',
  description: '151'
  }

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsReponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((poke) => ({
    id: poke.url.split("/").at(-2) ?? "",
    name: poke.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className='flex flex-col items-center justify-center m-2'>
      <span className="text-4xl mb-9 font-semibold text-gray-600 tracking-wide">List of static Pokemon</span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
