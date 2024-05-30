import React from "react";
import { Row, Col, Grid } from "reactstrap";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send", formData);
      console.log(response.data);
      alert("Message sent!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };

  const InputStyle = {
    height: "50px",
    padding: "10px 45px",
    fontSize: "18px",
    borderRadius: "8px",

    backgroundColor: "#33121d",
    border: "none",
    color: "white",
    width: "full",
  };

  const ButtonStyle = {
    backgroundColor: "#00BFFF",
    borderColor: "#00BFFF",
    boxShadow: "0 4px 8px rgba(0, 191, 255, 0.5)",
    filter: "blur(1px)",
    width: "auto",
    padding: "10px 20px",
    marginTop: "20px",
    borderRadius: "10px",
    fontSize: "18px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{
          borderRadius: "10px",
          // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "700px",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "40px" }}>Contact Me!</h1>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <Col md={6} style={{ paddingRight: "7px" }}>
            <FormGroup>
              <Input
                style={InputStyle}
                id="Name"
                name="Name"
                placeholder="Full Name"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6} xs={12} style={{ paddingLeft: "7px" }}>
            <FormGroup>
              <Input
                style={InputStyle}
                id="email"
                name="email"
                placeholder="email"
                type="email"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col md={6} xs={12} style={{ paddingRight: "7px" }}>
            <FormGroup>
              <Input
                style={InputStyle}
                id="Number"
                name="Number"
                placeholder="Mobile Number"
                type="text"
              />
            </FormGroup>
          </Col>
          <Col md={6} xs={12} style={{ paddingLeft: "7px" }}>
            <FormGroup>
              <Input
                style={InputStyle}
                id="Email"
                name="Email"
                placeholder="Email Subject"
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup row>
          <Col sm={12}>
            <Input
              style={{
                ...InputStyle,
                height: "auto",
                minHeight: "200px",
                marginTop: "15px",
                width: "90%",
              }}
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Your Message"
            />
          </Col>
        </FormGroup>
        <Button style={ButtonStyle} size="lg">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
