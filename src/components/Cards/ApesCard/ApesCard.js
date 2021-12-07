import React from "react";
import "./ApesCard.css";
import verifiedIcon from "assets/images/Desktop/Icon-verified-user.svg";
import ethereumClassicIcon from "assets/images/Desktop/ethereum-classic.svg";

function ApesCard({ img }) {
  return (
    <div className="ape-card">
      <img src={img} alt="" />

      <div className="ape-card-title">
        <p className="fs-26px darkest-blue font-circular-bold">#698</p>
        <p className="fs-16px darkest-blue font-circular-bold">CK_1337_VAULT</p>
      </div>

      <p className="fs-22px darkest-blue ape-card-verified-user">
        Bored Ape <img src={verifiedIcon} alt="" />
      </p>

      <div className="ape-insights">
        <div className="ape-insights-left">
          <p className="fs-18px darkest-blue">Top Bid:</p>
          <img src={ethereumClassicIcon} alt="" />
          <p className="fs-16px font-circular-bold">35.72</p>
        </div>
        <p className="fs-16px darkest-blue">4 Days left</p>
      </div>
    </div>
  );
}

export default ApesCard;
