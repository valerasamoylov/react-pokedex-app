import React from "react";
import { Col, Typography } from "antd";
import "./GridCards.css";

const { Title } = Typography;

function GridCards(props) {
  let { key, image, pokemonId, pokemonName, typeName } = props;

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
          {pokemonName.toUpperCase()}
        </Title>
        <span>{typeName}</span>
      </div>
    </Col>
  );
}

export default GridCards;
