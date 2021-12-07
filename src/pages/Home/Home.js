import React from "react";
import "./Home.css";
import Launch from "layouts/Launch/Launch";
import Hero from "layouts/Hero/Hero";
import Team from "layouts/Team/Team";

const Home = () => {
  return (
    <>
      <div className="mb-100px">
        <Hero />
      </div>
      <Launch />
      <Team />
    </>
  );
};

export default Home;
