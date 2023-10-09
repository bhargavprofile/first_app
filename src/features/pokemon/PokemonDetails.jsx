import React from "react";
// import axios from "axios";
import { useGetPokemonDetailsByNameQuery } from "../../services/pokemon/pokemon";

function PokemonDetails(props) {
  console.log("welcome", props);
  var pkmondetails = props;
  var { data, isLoading } = useGetPokemonDetailsByNameQuery(pkmondetails);

  console.log(data);

  if (!isLoading) {
    console.log(data);
  }

  // console.log(data);
  return (
    <div>
      {
        <h1>
          details of pkmon <b>{data}</b>
          <br />
        </h1>
      }
    </div>
  );
}

export default PokemonDetails;
