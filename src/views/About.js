import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

function About(props) {
  let { pokemonUrl } = props;
  return (
    <div
      style={{
        position: "fixed",
        top: 150,
        right: 150,
      }}
    >
      <div
        style={{ border: "1px solid #333", height: "300px", width: "250px" }}
      >
        <Title level={4} style={{ textAlign: "center" }}>
          ABOUT
        </Title>
      </div>
    </div>
  );
}

export default About;
