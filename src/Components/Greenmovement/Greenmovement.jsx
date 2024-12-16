import React from "react";
import "./Greenmovement.css";
import sampleImage from "../../../public/assets/greenmovement.png"; // Replace with your image path

const GreenMovement = () => {
  return (
    <div className="green-movement">
    <div className="green-movement-container">
      <div className="content-section">
        <h1 className="title">Join the green movement</h1>
        <p className="subtitle">
          Our commitment to green energy is paving the way for a cleaner, healthier planet.
        </p>
        <button className="cta-button">Get in touch</button>
      </div>
      <div className="image-section">
     
        <div className="circle-mask">
        <img src={sampleImage} alt="Person holding charger" />
           <div className="light">

           </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GreenMovement;
