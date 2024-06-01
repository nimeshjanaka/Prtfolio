import React from "react";
import { Row, Col } from "antd";
import CardComponent from "../CardComponent";

const Fortfolio = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Latest Project</h1>
      <Row gutter={[20, 12]} justify="center">
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <CardComponent
            title={"Web Development"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <CardComponent
            title={"Graphic Design"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <CardComponent
            title={"Digital Marketing"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
      </Row>

      <Row gutter={[20, 12]} justify="center">
        <Col xs={24} sm={24} md={12} lg={6}>
          <CardComponent
            title={"Web Development"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <CardComponent
            title={"Graphic Design"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
        <Col xs={24} sm={18} md={12} lg={10} xl={8}>
          <CardComponent
            title={"Digital Marketing"}
            description={`when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with `}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Fortfolio;
