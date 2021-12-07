import React from "react";
import apesOnTree from "assets/images/Desktop/apes-on-tree-2.png";
import Button from "components/Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-wrapper ">
      <div className="container-wrapper">
        <div className="hero">
          <div className="hero-left">
            <p className="fs-56px red lh-71px font-circular-bold mb-35px">
              Apes are taking over Boba Network this Christmas
            </p>

            <p className="fs-22px darkest-blue lh-34px mb-15px">
              BobaApes is a Christmas collection of 10,000 randomized and unique
              digital collectibles.
            </p>
            <p className="fs-22px darkest-blue lh-34px mb-15px">
              {" "}
              These apes love boba tea so much, they have decided to make Boba
              Network their home.
            </p>
            <p className="fs-22px darkest-blue lh-34px mb-15px">
              {" "}
              Each BobaApe is unique, and programmatically generated from X
              possible traits.{" "}
            </p>
            <p className="fs-22px darkest-blue lh-34px mb-35px">
              These traits include clothing, background, headwear, accessories
              and more. The apes exist on Boba Network as ERC-721 tokens, and
              have their metadata hosted on IPFS.
            </p>

            <p className="fs-22px red italic mb-40px">
              * BobaApes are not affiliated with BAYC
            </p>

            {/* <Button
              title="Let's Get Started"
              style={{ padding: "1rem 2rem" }}
            /> */}
          </div>
          <div className="hero-right">
            <img src={apesOnTree} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
