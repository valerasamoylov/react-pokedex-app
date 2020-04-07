import React from "react";
import PokemonDetails from "../commons/PokemonDetails";
import { IMAGE_BASE_URL } from "../config";

function About(props) {
  let {
    pokemon,
    LoadingForSelectedPokemon,
    index,
    PokemonTypes,
    PokemonStats,
  } = props;

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <PokemonDetails
        pokemonName={pokemon.name}
        pokemonId={pokemon.id}
        pokemon={pokemon}
        LoadingForSelectedPokemon={LoadingForSelectedPokemon}
        image={`${IMAGE_BASE_URL}${index}.png`}
        PokemonTypes={PokemonTypes}
        PokemonStats={PokemonStats}
      />
    </div>
  );
}

export default About;
