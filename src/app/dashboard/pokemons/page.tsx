import { SimplePokemon } from "../../pokemons/interfaces/simple-pokemon";
import { PokemonsReponse } from "../../pokemons/interfaces/pokemons-response";
import Image from 'next/image';
import { PokemonGrid } from "@/app/pokemons/components/PokemonGrid";


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
  return <div className='flex flex-col'>
          <span className="text-5xl my-2">Listado de pokemons <small>estatico</small></span>

    <PokemonGrid pokemons={pokemons}/>
     </div>;
}
