import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Pokemons from "./Pokemons";
import About from "./About";
import { API_URL } from "../config";

function Wrapper() {
  const [PokemonsList, setPokemonsList] = useState([]);
  const [MainPokemonImage, setMainPokemonImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);
  const [SelectedPokemon, setSelectedPokemon] = useState([]);
  const [LoadingForSelectedPokemon, setLoadingForSelectedPokemon] = useState(
    true
  );
  const [SelectedPokemonIndex, setSelectedPokemonIndex] = useState();
  const [PokemonTypes, setPokemonTypes] = useState([]);
  const [PokemonStats, setPokemonStats] = useState([]);
  const [isAboutShown, setAboutShow] = useState(false);

  useEffect(() => {
    const endpoint = `${API_URL}?offset=${CurrentPage}&limit=12`;
    fetchPokemons(endpoint); // eslint-disable-next-line
  }, []);

  const fetchPokemons = (endpoint) => {
    fetch(endpoint)
      .then((result) => result.json())
      .then((result) => {
        setPokemonsList([...PokemonsList, ...result.results]);
        setMainPokemonImage(MainPokemonImage || result.results[0]);
        setCurrentPage(CurrentPage + 12);
      }, setLoading(false))
      .catch((error) => console.error("Error:", error));
  };

  const loadMoreItems = () => {
    let endpoint = "";
    endpoint = `${API_URL}?offset=${CurrentPage}&limit=12`;
    fetchPokemons(endpoint);
  };

  const fetchPokemonDetails = (pokemonId) => {
    fetch(`${API_URL}${pokemonId}`)
      .then((result) => result.json())
      .then((result) => {
        setSelectedPokemon(result);
      }, setLoadingForSelectedPokemon(false))
      .catch((error) => console.log("Error:", error));
  };

  const fetchPokemon = (pokemonId) => {
    fetch(`${API_URL}${pokemonId}`)
      .then((result) => result.json())
      .then((result) => {
        setPokemonTypes([result.types]);
      }, setLoadingForSelectedPokemon(false))
      .catch((error) => console.error("Error:", error));
  };

  const fetchPokemonStats = (pokemonId) => {
    fetch(`${API_URL}${pokemonId}`)
      .then((result) => result.json())
      .then((result) => {
        setPokemonStats([result]);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <Row>
      <Col xs={24} sm={14} lg={16}>
        <Pokemons
          PokemonsList={PokemonsList}
          loadMoreItems={loadMoreItems}
          Loading={Loading}
          onClickPoke={(pokemonId) => {
            fetchPokemonDetails(pokemonId);
            fetchPokemon(pokemonId);
            fetchPokemonStats(pokemonId);
            setSelectedPokemonIndex(pokemonId);
            setAboutShow(true);
          }}
        />
      </Col>
      <Col xs={24} sm={10} lg={8}>
        {isAboutShown && (
          <About
            pokemon={SelectedPokemon}
            PokemonTypes={PokemonTypes}
            PokemonStats={PokemonStats}
            index={SelectedPokemonIndex}
            LoadingForSelectedPokemon={LoadingForSelectedPokemon}
          />
        )}
      </Col>
    </Row>
  );
}

export default Wrapper;
