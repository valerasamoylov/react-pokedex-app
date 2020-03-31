import React from "react";
import Content from "../components/Content";
import About from "../components/About";
import { Row, Col } from "antd";

function Wrapper() {
  return (
    <Row>
      <Col xs={24} sm={14} lg={16}>
        <Content />
      </Col>
      <Col xs={24} sm={10} lg={8}>
        <About />
      </Col>
    </Row>
  );
}

export default Wrapper;
