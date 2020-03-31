import React, { useEffect, useState, useRef } from "react";
import { Row } from "antd";
import { API_URL, IMAGE_BASE_URL } from "../config";
import GridCard from "../commons/GridCards";

function Content() {
  const buttonRef = useRef(null);

  const [Pokemons, setPokemons] = useState([]);
  const [Types, setTypes] = useState([]);
  const [MainPokemonImage, setMainPokemonImage] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const endpoint = `${API_URL}pokemon/?limit=12`;
    fetchPokemons(endpoint);
  }, []);

  useEffect(() => {
    const endpoint = `${API_URL}type/?limit=999
`;
    fetchTypes(endpoint);
  }, []);

  const fetchTypes = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setTypes([...Types, ...result.results]);
      })
      .catch(error => console.error("Error:", error));
  };

  const fetchPokemons = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setPokemons([...Pokemons, ...result.results]);

        setMainPokemonImage(MainPokemonImage || result.results[0]);
      }, setLoading(false))
      .catch(error => console.error("Error:", error));
  };
  const loadMoreItems = () => {
    let endpoint = "";
    endpoint = `${API_URL}pokemon?offset=12&limit=12`;
    fetchPokemons(endpoint);
    fetchTypes(endpoint);
  };
  return (
    <div style={{ margin: 0 }}>
      <div style={{ margin: "1rem auto" }}>
        <Row gutter={[16, 16]}>
          {Pokemons &&
            Pokemons.map((pokemon, index, type) => (
              <React.Fragment key={index}>
                <GridCard
                  image={`${IMAGE_BASE_URL}${++index}.png`}
                  pokemonId={pokemon.id}
                  pokemonName={pokemon.name}
                  typeName={type.name}
                />
              </React.Fragment>
            ))}
        </Row>
        {Loading && <div>Loading...</div>}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;
