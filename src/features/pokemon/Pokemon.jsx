import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon/pokemon";

const Pokemon = () => {
  const { data, isLoading } = useGetPokemonByNameQuery();
  console.log(data);
  return (
    <div>
      <h1>Pokemon</h1>
      <div></div>
    </div>
  );
};

export default Pokemon;
