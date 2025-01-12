import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../../public/assets/em logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navbarRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // Close menu if clicking outside
    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="navbar" ref={navbarRef}>
            {/* Logo Section */}
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo-img" />
                <span className="logo-text">Emission Zero</span>
            </div>

            {/* Toggle Button */}
            <button className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Navigation Links */}
            <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
                <li>
                    <Link 
                        to="about" 
                        smooth={true} 
                        duration={500} 
                        offset={-50} 
                        onClick={closeMenu}
                    >
                        About us
                    </Link>
                </li>
                <li>
                    <Link 
                        to="team" 
                        smooth={true} 
                        duration={500} 
                        offset={-50} 
                        onClick={closeMenu}
                    >
                        Team
                    </Link>
                </li>
                <li>
                    <Link 
                        to="solutions" 
                        smooth={true} 
                        duration={500} 
                        offset={-50} 
                        onClick={closeMenu}
                    >
                        Solutions
                    </Link>
                </li>
                <li>
                    <Link 
                        to="faq" 
                        smooth={true} 
                        duration={500} 
                        offset={-50} 
                        onClick={closeMenu}
                    >
                        FAQ's
                    </Link>
                </li>
            </ul>

            <button className="contact-button">Get in touch</button>
        </nav>
    );
};

export default Navbar;
