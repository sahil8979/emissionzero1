import React from "react";
import { Link } from "react-scroll"; // Import Link for smooth scroll
import "./Greenmovement.css";
import sampleImage from "../../../public/assets/greenmovement.png"; // Replace with your image path

const GreenMovement = () => {
  return (
    <div className="green-movement">
      <div className="green-movement-container">
        {/* Content Section */}
        <div className="content-section">
          <h1 className="title">Join the Next Revolution</h1>
          <p className="subtitle">
            Emission Zero: Cultivating Change, Growing Greener - Empowering a
            Sustainable Tomorrow with Algae Innovation!
          </p>
          <button className="cta-button">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-50}
            >
              Get in touch
            </Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="image-section">
          <div className="circle-mask">
            <img src={sampleImage} alt="Green movement illustration" />
            <div className="light"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenMovement;
