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

  const setPokemon = (pokemon) => setSelectedPokemon(pokemon);

  return (
    <Row>
      <Col xs={24} sm={14} lg={16}>
        <Pokemons
          PokemonsList={PokemonsList}
          loadMoreItems={loadMoreItems}
          Loading={Loading}
          setPokemon={setPokemon}
        />
      </Col>
      <Col xs={24} sm={10} lg={8}>
        <About />
      </Col>
    </Row>
  );
}

export default Wrapper;
