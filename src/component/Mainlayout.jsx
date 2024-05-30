import React from "react";
import { Layout, Menu, Row } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Pages from "../Pages";
import "./MainLayout.css";

const { Header, Content, Footer } = Layout;

const Mainlayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key);
  };

  return (
    <Layout>
      <Header
        style={{
          background: "0D0D0D",
          display: "flex",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", color: "white" }}>
          <h1>Portfolio</h1>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["/home"]}
          onClick={onClick}
          selectedKeys={[location.pathname]}
          style={{ lineHeight: "64px", fontSize: "14px" }}
          items={[
            {
              key: "/home",
              label: "Home",
            },
            {
              key: "/service",
              label: "Service",
            },
            {
              key: "/about",
              label: "About",
            },
            {
              key: "/portfolio",
              label: "Portfolio",
            },
            {
              key: "/contact",
              label: "Contact",
            },
          ]}
        />
      </Header>

      <Content>
        <div
          className="full-height-background"
          style={{
            background: "#21222d",
            color: "white",
            height: "100%",
          }}
        >
          <Pages />
        </div>
      </Content>
    </Layout>
  );
};

export default Mainlayout;
