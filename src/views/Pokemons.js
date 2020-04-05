import React, { useRef } from "react";
import { Row, Button } from "antd";
import { IMAGE_BASE_URL } from "../config";
import GridCard from "../commons/GridCards";

function Pokemons(props) {
  let { PokemonsList, loadMoreItems, Loading, setPokemon } = props;
  const buttonRef = useRef(null);

  return (
    <div style={{ margin: 0 }}>
      <div style={{ margin: "1rem auto" }}>
        <Row gutter={[16, 16]}>
          {PokemonsList &&
            PokemonsList.map((pokemon, index) => (
              <React.Fragment key={index}>
                <GridCard
                  image={`${IMAGE_BASE_URL}${++index}.png`}
                  pokemonId={index}
                  pokemonName={pokemon.name}
                  pokemonUrl={pokemon.url}
                  setPokemon={setPokemon}
                />
              </React.Fragment>
            ))}
        </Row>
        {Loading && <div>Loading...</div>}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button ref={buttonRef} className="loadMore" onClick={loadMoreItems}>
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pokemons;
