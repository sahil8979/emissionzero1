import React from 'react';
import { Link } from 'react-scroll'; // Ensure you're importing the Link component
import './Hero.css';
import heroimg1 from '../../../public/assets/heroimg1.png';
import heroimg2 from '../../../public/assets/heroright.png';

const Hero = () => {
    const closeMenu = () => {
        // Add functionality to close the menu if required
    };

    return (
        <div className="hero">
            <div className="hero-content">
                <small className="hero-subtitle">Cleaner Tomorrow</small>
                <h1 className="hero-title">
                    Cleaner Air <br /> Greener Future
                </h1>
                <p className="hero-description">
                    Our commitment is to reduce rising pollution levels by<br />
                    harnessing the power of micro-algae. Join us on a journey<br />
                    toward a cleaner, greener future where innovation and<br />
                    sustainability work hand in hand for a better tomorrow.
                </p>
                <div className="hero-buttons">
                    <button className="hero-button primary">
                        <Link
                            to="solutions"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={closeMenu}
                        >
                            See our solutions
                        </Link>
                    </button>
                    <button className="hero-button secondary">
                    <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={closeMenu}
                        >
                            Get In Touch
                        </Link>
                    </button>
                </div>
            </div>

            <div className="left-image">
                <img src={heroimg1} alt="Hero Left" />
            </div>
            <div className="right-image">
                <img src={heroimg2} alt="Hero Right" />
            </div>
        </div>
    );
};

export default Hero;
