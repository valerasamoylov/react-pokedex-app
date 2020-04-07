import React, { useState, useEffect } from "react";
import { Typography } from "antd";
const { Title } = Typography;

function PokemonDetails(props) {
  let { pokemon, Loading, image, PokemonTypes, pokemonName } = props;

  return (
    <div
      style={{
        border: "1px solid #333",
        height: "300px",
        width: "67%",
      }}
    >
      <img alt={pokemon.id} src={image} />
      <Title
        level={4}
        style={{ textAlign: "center", fontWeight: 800 }}
        key={pokemon.id}
      >
        {pokemonName} #{pokemon.id}
      </Title>

      {Loading && <div>Loading...</div>}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <span>Type</span>
        {PokemonTypes &&
          PokemonTypes.map((types, id) => (
            <React.Fragment key={id}>
              {types.map((currType, url) => (
                <span key={url}>
                  {currType.type.name.charAt(0).toUpperCase() +
                    currType.type.name.substring(1)}
                </span>
              ))}
            </React.Fragment>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <span>Weight</span>
        <span>{pokemon.weight * 0.1} kg</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {console.log(pokemon.moves)}
      </div>
    </div>
  );
}

export default PokemonDetails;
