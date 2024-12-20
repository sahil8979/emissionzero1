import React, { useState, useEffect } from "react";
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

  return (
    <div className="about-us-container">
      {/* About Us Text */}
      <div className="about-text-container">
        <div className="about-title">
          <h2>About us</h2>
        </div>
        <div>
          <p className="about-description">
            At Flow, we are committed to a sustainable future. As a pioneering
            force in the green energy sector, we have been at the forefront of
            the transition to clean, renewable power sources. Our mission is
            simple yet profound: to create a world where energy is not only
            abundant but also environmentally responsible. We believe that by
            harnessing the power of nature, we can power the world and protect
            it simultaneously.
          </p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="image-grid">
        <img src={solarPanel} alt="Solar Panel" className="grid-image" />
        <img src={river} alt="River Energy" className="grid-image" />
        <img src={windFarm} alt="Wind Farm" className="grid-image" />
        <img src={charging} alt="EV Charging" className="grid-image" />
        <img src={oceanWave} alt="Ocean Energy" className="grid-image" />
      </div>

      {/* Stats Section */}
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
    </div>
  );
};

export default AboutUs;
