import React, { useState } from "react";
import { Row, Col, Grid, Button } from "antd";
import about from "../../asset/aboutpic.png.webp";

const { useBreakpoint } = Grid;

const About = ({ description = "" }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const screens = useBreakpoint();

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const renderDescription = () => {
    return isReadMore ? description : `${description.substring(0, 100)}...`;
  };

  return (
    <Row gutter={[8, 24]}>
      <Col span={screens.xs ? 24 : 12}>
        <img
          style={{
            padding: "20px",
            maxWidth: "80%",
            height: "auto",
            borderRadius: "45px",
          }}
          src={about}
          alt="aboutpic"
        />
      </Col>

      <Col span={screens.xs ? 24 : 12}>
        <div
          style={{
            color: "white",
            textAlign: "left",
            marginLeft: "30px",
          }}
        >
          <div style={{ lineHeight: "1" }}>
            <h1 style={{ fontWeight: "bold", fontSize: "28px" }}>About Me</h1>
            <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>
              Frontend Developer
            </h2>
            <span style={{ lineHeight: "1.5", justifyContent: "center" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words. consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum"
              <br /> (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section. There are
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the
              middle of text. All the Lorem Ipsum generators on the Internet
              tend to repeat predefined chunks as necessary,
              <br /> making this the first true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combined with a handful
              of model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </span>
          </div>
          <div
            className="description"
            style={{ textAlign: "center", color: "white" }}
          >
            {renderDescription()}
          </div>
          <Button
            type="link"
            onClick={toggleReadMore}
            className="read-more-button"
            style={{ color: "#fff", background: "gray", borderRadius: "10px" }}
          >
            {isReadMore ? "Read Less" : "Read More"}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default About;
