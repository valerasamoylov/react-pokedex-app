import React from "react";
import { Typography } from "antd";
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

function PokemonDetails(props) {
  let {
    pokemon,
    Loading,
    image,
    PokemonTypes,
    pokemonName,
    pokemonId,
    PokemonStats,
  } = props;

  pokemonId = String(pokemonId);

  return (
    <div
      style={{
        border: "1px solid #333",
        height: "300px",
        width: "67%",
        backgroundColor: "lightblue",
      }}
    >
      <img alt={pokemon.id} src={image} />
      <Title
        level={2}
        style={{ textAlign: "center", fontWeight: 800 }}
        key={pokemon.id}
      >
        {pokemonName !== undefined ? (
          <span>
            {pokemonName.charAt(0).toUpperCase() + pokemonName.substring(1)}{" "}
          </span>
        ) : null}
        {pokemonId !== undefined
          ? (pokemonId.length === 1 && <span>#00{pokemonId}</span>) ||
            (pokemonId.length === 2 && <span>#0{pokemonId}</span>) ||
            (pokemonId.length === 3 && <span>#{pokemonId}</span>)
          : null}
      </Title>

      {Loading && <div>Loading...</div>}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>Type</span>
        <span>
          {PokemonTypes &&
            PokemonTypes.map((types, id) => (
              <React.Fragment key={id}>
                {types.map((currType, url) => (
                  <span
                    key={url}
                    style={{
                      margin: "0 .2rem",
                      color: "#fff",
                      padding: "0 1rem",
                      backgroundColor: `${typeColors[currType.type.name]}`,
                      borderRadius: ".3rem",
                    }}
                  >
                    {currType.type.name.charAt(0).toUpperCase() +
                      currType.type.name.substring(1)}
                  </span>
                ))}
              </React.Fragment>
            ))}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <span>Weight</span>
        <span>{pokemon.weight * 0.1} kg</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p style={{ padding: "0", margin: "0" }}>Speed</p>
          <p style={{ padding: "0", margin: "0" }}>SP Defense</p>
          <p style={{ padding: "0", margin: "0" }}>SP Attack</p>
          <p style={{ padding: "0", margin: "0" }}>Defense</p>
          <p style={{ padding: "0", margin: "0" }}>Attack</p>
          <p style={{ padding: "0", margin: "0" }}>HP</p>
        </div>
        {PokemonStats &&
          PokemonStats.map((pokemon, id) => (
            <React.Fragment key={id}>
              <div>
                {pokemon.stats
                  ? pokemon.stats.map((t) => (
                      <p
                        style={{
                          padding: "0",
                          margin: "0",
                          textAlign: "right",
                        }}
                      >
                        {t.base_stat}
                      </p>
                    ))
                  : ""}
              </div>
            </React.Fragment>
          ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>Total moves</div>
        {pokemon.moves !== undefined ? (
          <span>{pokemon.moves.length} </span>
        ) : null}
      </div>
    </div>
  );
}

export default PokemonDetails;
