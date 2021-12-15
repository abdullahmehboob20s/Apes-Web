import React from "react";
import "./AppesCollection.css";
import apesBg from "assets/images/Desktop/apes-bg.svg";
import ApesCard from "components/Cards/ApesCard/ApesCard";
import ape2 from "assets/images/Desktop/ape-2.png";
import data from "./appesData.json";

function AppesCollection() {
  return (
    <div>
      <div className="mb-100px">
        <div className="apes-collection-bg ">
          <img src={apesBg} alt="" />
        </div>
      </div>
      <div className="container-wrapper">
        <p className="fs-26px dark-gray font-circular-medium mb-50px">
          Showing Results "265" Apes
        </p>

        <div className="mb-100px">
          <div className="apes-cards mb-100px">
            {data.apesData.map((apeData, index) => (
              <ApesCard img={ape2} details={apeData.details} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppesCollection;
