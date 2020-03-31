import React, { useEffect, useState, useRef } from "react";
import { API_URL, IMAGE_BASE_URL } from "../config";

function About(props) {
  const pokemonId = props.pokemonId;
  const [Pokemon, setPokemon] = useState([]);
  const [LoadingForPokemon, setLoadingForPokemon] = useState(true);

  const [Pokemons, setPokemons] = useState([]);
  return (
    <div
      style={{
        position: "fixed",
        top: 150,
        right: 150
      }}
    >
      this is about pokemon page
    </div>
  );
}

export default About;
