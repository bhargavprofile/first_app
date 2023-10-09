import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon/pokemon";
import PokemonDetails from "./PokemonDetails";

const Pokemon = () => {
  const { data, isLoading } = useGetPokemonByNameQuery();
  console.log(data);

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {data &&
          data.results.map((pokemon) => {
            return <PokemonDetails pkmonprops={pokemon.name}></PokemonDetails>;
          })}
      </ul>
    </div>
  );
};

export default Pokemon;
