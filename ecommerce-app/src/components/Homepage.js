import React from "react";
import Header from "./homepage/Header";
import Navigation from "./homepage/Navigation";
import Footer from "./homepage/Footer";
import Section from "./homepage/Section";

const Homepage = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Section />
            <Footer />
        </>
    )
};

export default Homepage;