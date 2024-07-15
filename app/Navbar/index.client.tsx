'use client'

import { useState } from 'react'
import "./Navbar.css";

const MyNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="navbarMain">
            <div className="navbarContainer">
                <div className="navbarLogo">
                    Id Crisys
                </div>

                <div className="navbarToggle" onClick={() => setIsActive(!isActive)}>
                    {/* This can be replaced with an icon for a more polished look */}
                    {isActive ? 'Close' : 'Menu'}
                </div>

                <div className={`navbarLinks ${isActive ? "active" : ""}`}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default MyNavbar;
