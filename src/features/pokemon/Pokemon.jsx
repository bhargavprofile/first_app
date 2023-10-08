import React from "react";
import { useGetPokemonByNameQuery } from "../../services/pokemon/pokemon";

const Pokemon = () => {
  const { data, isLoading } = useGetPokemonByNameQuery([]);
  console.log(data);
  data &&
    data.map((a) => {
      console.log(a);
    });
  return (
    <div>
      <h1>Pokemon</h1>
      <ul></ul>

      <div></div>
    </div>
  );
};

export default Pokemon;
