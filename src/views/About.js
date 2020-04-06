import React, { useState, useEffect } from "react";
import PokemonDetails from "./PokemonDetails";
import { API_URL, IMAGE_BASE_URL } from "../config";

function About(props) {
  let { index } = props;
  const [Pokemon, setPokemon] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let endpointForPokemonDetails = `${API_URL}${index}`;
    fetchPokemonDetails(endpointForPokemonDetails);
  });

  const fetchPokemonDetails = (endpointForPokemonDetails) => {
    fetch(endpointForPokemonDetails)
      .then((result) => result.json())
      .then((result) => {
        setPokemon([Pokemon, result]);
      }, setLoading(false))
      .catch((error) => console.log("Error:", error));
  };

  return (
    <div style={{}}>
      <PokemonDetails
        pokemon={Pokemon}
        Loading={Loading}
        image={`${IMAGE_BASE_URL}${index}.png`}
      />
    </div>
  );
}

export default About;
