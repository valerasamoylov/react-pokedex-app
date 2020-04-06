import React, { useState, useEffect } from "react";
import { Typography } from "antd";
const { Title } = Typography;

function PokemonDetails(props) {
  let { pokemon, Loading, image } = props;

  return (
    <div
      style={{
        border: "1px solid #333",
        height: "300px",
        width: "67%",
      }}
    >
      <div>
        <img alt={pokemon.id} src={image} />
        {pokemon.map((pokemon) => (
          <Title level={4} style={{ textAlign: "center" }} key={pokemon.id}>
            {pokemon.name}
          </Title>
        ))}
      </div>
      {Loading && <div>Loading...</div>}
    </div>
  );
}

export default PokemonDetails;
