import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Service from "./component/Service/Service";
import Portfolio from "./component/Fortfolio/Fortfolio";
import About from "./component/about/About";
import Contact from "./component/Contact/Contact";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" exact element={<Home />} />
      <Route path="/portfolio" exact element={<Portfolio />} />
      <Route path="/service" exact element={<Service />} />
      <Route path="/about" exact element={<About />} />
      <Route path="/contact" exact element={<Contact />} />
    </Routes>
  );
};

export default Pages;
