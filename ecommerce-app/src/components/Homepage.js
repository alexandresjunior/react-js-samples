import React from "react";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";
import Section from "./homepage/Section";

const Homepage = ({ cart, setCart }) => {
  return (
    <>
      <Header />
      <Section cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
};

export default Homepage;
