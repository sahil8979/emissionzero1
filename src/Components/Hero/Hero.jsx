import React from 'react';
import './Hero.css';
import heroimg1 from '../../../public/assets/heroimg1.png';
import heroimg2 from '../../../public/assets/heroright.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <small className="hero-subtitle">Cleaner Tomorrow</small>
                <h1 className="hero-title">
                    Cleaner Air <br />Greener Future
                </h1>
                <p className="hero-description">
                    Our commitment is to reduce rising pollution levels by,<br /> 
                    harnessing the, power of micro-algae.join us on journey,<br />
                    toward a cleaner, greener future where innovation and ,<br /> 
                    sustainability work hand in hand for a better tomorrow.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button primary">See our solutions</button>
                    <button className="hero-button secondary">Get in touch</button>
                </div>
            </div>

            <div className="left-image">
                <img src={heroimg1} alt="Hero" />
            </div>
            <div className="right-image">
                <img src={heroimg2} alt="Hero2" />
            </div>
            <div className="rightbottom-image"></div>
            <div className="leftbottom-image"></div>
        </div>
    );
};

export default Hero;
