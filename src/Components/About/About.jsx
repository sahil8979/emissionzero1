import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./About.css";

// Import images
import solarPanel from "../../../public/assets/bottomleft.png";
import river from "../../../public/assets/about img.png";
import windFarm from "../../../public/assets/bottomright.png";
import charging from "../../../public/assets/heroright.png";
import oceanWave from "../../../public/assets/heroimg1.png";

const StatCounter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 1000 / 10); // Calculate increment per 10ms

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  // State to manage whether the full description is shown
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Reference to the About Description text
  const aboutDescriptionRef = useRef(null);

  // Handle toggling of the "Read More" button
  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  // Close the description if clicked outside
  const handleClickOutside = (event) => {
    if (aboutDescriptionRef.current && !aboutDescriptionRef.current.contains(event.target)) {
      setIsExpanded(false);  // Close the description if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="about-us-container" id="about">
      {/* About Us Text */}
      <div className="about-text-container">
        <div className="about-title">
          <h2>About us</h2>
        </div>
        <div>
          <p 
            ref={aboutDescriptionRef} 
            className={`about-description ${isExpanded ? 'expanded' : ''}`}
          >
            Welcome to Emission Zero! At Emission Zero, we're dedicated to paving the way for a cleaner, greener, and brighter tomorrow. Our mission is to combat environmental pollution through the utilization of cutting-edge technologies, with a special focus on algae photobioreactors. By harnessing the power of these modern innovations, we're committed to reducing pollution and fostering a sustainable future for generations to come. Join us in our journey towards a world where emissions are zero, and the environment thrives.
            {isExpanded && "At Emission Zero, we don't just dream of a better world, we engineer it into existence.With each sustainable solution we deploy, Emission Zero lights the path to a future where nature and technology harmonize for planetary rejuvenation. Together, let's make a difference."}
          </p>
          <button className="read-more-button" onClick={toggleDescription}>
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </div>
      </div>
 {/*
      
     <div className="image-grid">
        <img src={solarPanel} alt="Solar Panel" className="grid-image" />
        <img src={river} alt="River Energy" className="grid-image" />
        <img src={windFarm} alt="Wind Farm" className="grid-image" />
        <img src={charging} alt="EV Charging" className="grid-image" />
        <img src={oceanWave} alt="Ocean Energy" className="grid-image" />
      </div>

     
      <div ref={ref} className="stats-container">
        {inView && (
          <>
            <div className="stat">
              <h3>
                <StatCounter value={5000} duration={2} /> Mwh
              </h3>
              <p>Renewable Energy Generated</p>
            </div>
            <div className="stat">
              <h3>
                <StatCounter value={2500} duration={2} />+
              </h3>
              <p>Metric Tons of CO2 Reduced</p>
            </div>
            <div className="stat">
              <h3>
                <StatCounter value={10000} duration={2} />+
              </h3>
              <p>Customers Served</p>
            </div>
            <div className="stat">
              <h3>
                <StatCounter value={15} duration={2} />%
              </h3>
              <p>Avg. Energy Saved</p>
            </div>
          </>
        )}
      </div>
      */}
    </div>
  );
};

export default AboutUs;
