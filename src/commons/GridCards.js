import React, { useEffect, useState } from "react";
import { Col, Typography } from "antd";
import "./GridCards.css";

const { Title } = Typography;
const typeColors = {
  normal: "#8A8A80",
  fire: "#FE6148",
  water: "#4B90D6",
  electric: "#FFCC32",
  grass: "#77CC55",
  ice: "#7ED4FF",
  fighting: "#BA5544",
  poison: "#AA5599",
  ground: "#D8BD6C",
  flying: "#9AA9FE",
  psychic: "#FF6FA9",
  bug: "#AABB22",
  rock: "#C5B67E",
  ghost: "#7D7EC6",
  dragon: "#7766ED",
  dark: "#795848",
  steel: "#B7B7C5",
  fairy: "#F1A9F0",
};

function GridCards(props) {
  let { key, image, pokemonName, pokemonUrl, SelectedPokemon } = props;

  const [PokemonTypes, setPokemonTypes] = useState([]);
  const [LoadingForPokemon, setLoadingForPokemon] = useState(true);

  useEffect(() => {
    const endpointForPokemonInfo = `${pokemonUrl}`;
    fetchPokemon(endpointForPokemonInfo); // eslint-disable-next-line
  }, []);

  const fetchPokemon = (endpointForPokemonInfo) => {
    fetch(endpointForPokemonInfo)
      .then((result) => result.json())
      .then((result) => {
        setPokemonTypes([...PokemonTypes, result.types]);
      }, setLoadingForPokemon(false))
      .catch((error) => console.error("Error:", error));
  };

  function handleClick(event) {
    setSelectedPokemon(pokemon);
  }

  return (
    <Col key={key} lg={8} md={12} xs={24} onClick={handleClick}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid #333",
          borderRadius: ".3rem",
        }}
      >
        <img alt={pokemonName} src={image} />

        <Title level={4} style={{ textAlign: "center" }}>
          {pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}
        </Title>

        <div>
          {PokemonTypes &&
            PokemonTypes.map((types, id) => (
              <React.Fragment key={id}>
                {types.map((currType, typeId) => (
                  <div
                    key={typeId}
                    style={{
                      color: "#fff",
                      padding: ".2rem 1rem",
                      display: "inline-block",
                      borderRadius: ".3rem",
                      margin: ".2rem",
                      backgroundColor: `${typeColors[currType.type.name]}`,
                    }}
                  >
                    {currType.type.name.charAt(0).toUpperCase() +
                      currType.type.name.substring(1)}
                  </div>
                ))}
              </React.Fragment>
            ))}
        </div>
        {LoadingForPokemon && <div>Loading...</div>}
      </div>
    </Col>
  );
}

export default GridCards;
