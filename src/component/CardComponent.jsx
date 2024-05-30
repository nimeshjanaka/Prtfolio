import React, { useState } from "react";
import { Card, Button } from "antd";
import "./Service/CardComponent.css";

const CardComponent = ({ icon, title, description }) => {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const renderDescription = () => {
    return isReadMore ? description : `${description.substring(0, 100)}...`;
  };

  return (
    <Card className="customCard">
      <div className="icon" style={{ fontSize: "40px" }}>
        {icon}
      </div>
      <div className="card-content">
        <div
          className="name"
          style={{
            color: "white",
            marginTop: "5px",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          {title}
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
    </Card>
  );
};

export default CardComponent;
