import React from "react";
import PokemonDetails from "./PokemonDetails";
import { IMAGE_BASE_URL } from "../config";

function About(props) {
  let { pokemon, LoadingForSelectedPokemon, index, PokemonTypes } = props;

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
        pokemon={pokemon}
        LoadingForSelectedPokemon={LoadingForSelectedPokemon}
        image={`${IMAGE_BASE_URL}${index}.png`}
        PokemonTypes={PokemonTypes}
      />
    </div>
  );
}

export default About;
