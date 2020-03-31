import React, { useEffect, useState, useRef } from "react";
import { Row } from "antd";
import { API_URL, IMAGE_BASE_URL } from "../config";
import GridCard from "../commons/GridCards";

function Content() {
  const buttonRef = useRef(null);

  const [Pokemons, setPokemons] = useState([]);
  const [MainPokemonImage, setMainPokemonImage] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [CurrentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `${API_URL}pokemon/?offset=${CurrentPage}&limit=12`;
    fetchPokemons(endpoint); // eslint-disable-next-line
  }, []);

  const fetchPokemons = endpoint => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        setPokemons([...Pokemons, ...result.results]);
        setMainPokemonImage(MainPokemonImage || result.results[0]);
        setCurrentPage(CurrentPage + 12);
      }, setLoading(false))
      .catch(error => console.error("Error:", error));
  };
  const loadMoreItems = () => {
    let endpoint = "";
    endpoint = `${API_URL}pokemon?offset=${CurrentPage}&limit=12`;
    fetchPokemons(endpoint);
  };

  return (
    <div style={{ margin: 0 }}>
      <div style={{ margin: "1rem auto" }}>
        <Row gutter={[16, 16]}>
          {Pokemons &&
            Pokemons.map((pokemon, index) => (
              <React.Fragment key={index}>
                <GridCard
                  image={`${IMAGE_BASE_URL}${++index}.png`}
                  pokemonId={index}
                  pokemonName={pokemon.name}
                  pokemonUrl={pokemon.url}
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
