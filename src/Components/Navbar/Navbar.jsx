import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

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
                <li><a href="#about" onClick={closeMenu}>About us</a></li>
                <li><a href="#team" onClick={closeMenu}>Team</a></li>
                <li><a href="#solutions" onClick={closeMenu}>Solutions</a></li>
                <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
            </ul>

            {/* Contact Button */}
            <button className="contact-button">Get in touch</button>
        </nav>
    );
};

export default Navbar;
