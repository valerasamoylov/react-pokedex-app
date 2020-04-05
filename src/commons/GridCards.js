import React, { useEffect, useState } from "react";
import { Col, Typography } from "antd";
import "./GridCards.css";

const { Title } = Typography;

function GridCards(props) {
  let { key, image, pokemonId, pokemonName, pokemonUrl } = props;

  const [Pokemon, setPokemon] = useState([]);
  const [LoadingForPokemon, setLoadingForPokemon] = useState(true);

  useEffect(() => {
    const endpointForPokemonInfo = `${pokemonUrl}`;
    fetchPokemon(endpointForPokemonInfo); // eslint-disable-next-line
  }, []);

  const fetchPokemon = endpointForPokemonInfo => {
    fetch(endpointForPokemonInfo)
      .then(result => result.json())
      .then(result => {
        setPokemon([...Pokemon, result.types]);
      }, setLoadingForPokemon(false))
      .catch(error => console.error("Error:", error));
  };

  return (
    <Col key={key} lg={8} md={12} xs={24}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid #333",
          borderRadius: ".3rem"
        }}
      >
        <a href={`/pokemon/${pokemonId}`}>
          <img alt={pokemonName} src={image} />
        </a>
        <Title level={4} style={{ textAlign: "center" }}>
          {pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}
        </Title>

        <div>
          {Pokemon &&
            Pokemon.map(types => (
              <React.Fragment key={types}>
                <div
                  style={{
                    color: "#333",
                    padding: 5,
                    maxWidth: 100,
                    display: "inline-block"
                  }}
                >
                  {}
                </div>
              </React.Fragment>
            ))}
        </div>
        {LoadingForPokemon && <div>Loading...</div>}
      </div>
    </Col>
  );
}

export default GridCards;
