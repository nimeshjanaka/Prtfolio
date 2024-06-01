import React from "react";
import { Row, Col, Grid } from "antd";
import { Button } from "reactstrap";
import image from "../../asset/img1.png";
import telegramIcon from "../../asset/Telegram.png";
import linkedInIcon from "../../asset/linkedin-logo.png";
import xIcon from "../../asset/x-logo.png";

const { useBreakpoint } = Grid;

const ButtonStyle = {
  backgroundColor: "#00BFFF",
  borderColor: "#00BFFF",
  boxShadow: "0 4px 8px rgba(0, 191, 255, 0.5)",
  filter: "blur",
  width: "auto",
  padding: "8px 20px",
  marginRight: "55%",
  marginTop: "40px",
  borderRadius: "15px",
  fontSize: "18px",
};

const Home = () => {
  const screens = useBreakpoint();
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={screens.xs ? 24 : 12}>
          <div
            style={{
              color: "white",
              textAlign: "left",
              marginLeft: "10%",
              marginTop: "18%",
            }}
          >
            <div style={{ lineHeight: "1" }}>
              <h2>Hello, It's Me</h2>
              <h1>Nimesh Janaka</h1>

              <h2>and I am Web developer</h2>
            </div>
            <span style={{ lineHeight: "1.5" }}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              marginLeft: "60px",
            }}
          >
            <a
              href="https://t.me/@Nimesh_Janaka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={telegramIcon}
                alt="Telegram"
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: "15px",
                }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/nimesh-janaka-63410525b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFIVXQw74QpGmfA%2Bx3CDVAQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInIcon}
                alt="LinkedIn"
                style={{
                  width: 40,
                  height: 40,
                  marginRight: 10,
                  borderRadius: "15px",
                }}
              />
            </a>
            <a
              href="https://x.com/NimeshJ22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={xIcon}
                alt="X Logo"
                style={{ width: 42, height: 40, borderRadius: "15px" }}
              />
            </a>
          </div>
          <a
            href="/Nimesh Janaka Ariyasinghe cv.pdf"
            download="Nimesh_Janaka_Ariyasinghe_CV.pdf"
          >
            <Button style={ButtonStyle} size="lg">
              Download CV
            </Button>
          </a>
        </Col>

        <Col span={screens.xs ? 24 : 12}>
          <img
            style={{
              maxWidth: "70%",
              height: "auto",
              borderRadius: "25px",
              marginTop: "7%",
              fontWeight: "bold",
            }}
            src={image}
            alt="img1"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
