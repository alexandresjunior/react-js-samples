import React from "react";
import Header from "./homepage/Header";
import Footer from "./homepage/Footer";
import Section from "./homepage/Section";

const Homepage = ({ cart, setCart, addNewItem }) => {
  return (
    <>
      <Header />
      <Section cart={cart} setCart={setCart} addNewItem={addNewItem} />
      <Footer />
    </>
  );
};

export default Homepage;
