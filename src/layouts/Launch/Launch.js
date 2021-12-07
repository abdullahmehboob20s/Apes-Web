import ApesCard from "components/Cards/ApesCard/ApesCard";
import React from "react";
import "./Launch.css";
import ape1 from "assets/images/Desktop/ape-1.png";
import ape2 from "assets/images/Desktop/ape-2.png";
import ape3 from "assets/images/Desktop/ape-3.png";
import ape4 from "assets/images/Desktop/ape-4.png";
import ape5 from "assets/images/Desktop/ape-5.png";
import ape6 from "assets/images/Desktop/ape-6.png";
import ape7 from "assets/images/Desktop/ape-7.png";
import ape8 from "assets/images/Desktop/ape-8.png";
import Button from "components/Button/Button";

function Launch() {
  return (
    <div className="container-wrapper">
      <div className="launch-titles">
        <p className="fs-56px font-circular-bold text-center red mb-30px">
          Fair Launch
        </p>
        <p className="fs-22px darkest-blue text-center mb-30px">
          All BobaApes have a fixed price, and it is the same for everyone.
          Minting a BobaApe costs 0.009 ETH.
        </p>

        <p className="red text-center fs-22px mb-80px">
          Note: X apes are being withheld for the sale. These will be used for
          giveaways, and the team members will keep one ape each.
        </p>
      </div>

      <div className="mb-100px">
        <div className="apes-cards mb-100px">
          <ApesCard img={ape1} />
          <ApesCard img={ape2} />
          <ApesCard img={ape3} />
          <ApesCard img={ape4} />
          <ApesCard img={ape5} />
          <ApesCard img={ape6} />
          <ApesCard img={ape7} />
          <ApesCard img={ape8} />
        </div>
        {/* <div className="text-center">
          <Button title="See All Apes" />
        </div> */}
      </div>
    </div>
  );
}

export default Launch;
