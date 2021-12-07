import React from "react";
import "./TeamCard.css";

function TeamCard({ img, name, designation, disc }) {
  return (
    <div className="team-card">
      <div className="card-head">
        <img src={img} alt="" />
        <div>
          <p className="fs-26px darkest-blue font-circular-bold">{name}</p>
          {designation ? <p className="fs-20px red">{designation}</p> : ""}
        </div>
      </div>

      <p className="fs-26px lh-40px font-cirular-medium darkest-blue">{disc}</p>
    </div>
  );
}

export default TeamCard;
