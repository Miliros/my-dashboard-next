import { FavoritesPokemons, PokemonGrid, PokemonsReponse, SimplePokemon } from "@/app/pokemons";

export const metadata = {
 title: 'Favoritos',
 description: 'Ad minim sit cupidatat culpa consectetur.',
};




export default async function PokemonsPage() {

  
  return (
    <div className="flex flex-col items-center ">

      <span className="my-5 text-4xl mb-9 font-semibold  text-gray-600">Favorites Pokemons</span>
      
      <FavoritesPokemons/>

    </div>
  );
}