import React from 'react';
import './Hero.css';
import heroimg1 from '../../../public/assets/heroimg1.png';
import heroimg2 from '../../../public/assets/heroright.png';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <small className="hero-subtitle">Powering Tomorrow</small>
                <h1 className="hero-title">
                    The Future of <br />Green Energy
                </h1>
                <p className="hero-description">
                    Our commitment to green energy is paving the way for a cleaner,<br /> 
                    healthier planet. Join us on a journey towards a future where clean,<br /> 
                    renewable energy sources transform the way we power our lives.
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
