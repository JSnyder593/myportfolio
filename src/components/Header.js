import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"

function Header() {
    const [homeActive, setHomeActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [portfolioActive, setPortfolioActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    const homeNav = {
        textDecoration: homeActive ? 'underline' : 'none'
    }
    const aboutNav = {
        textDecoration: aboutActive ? 'underline' : 'none'
    }
    const portfolioNav = {
        textDecoration: portfolioActive ? 'underline' : 'none'
    }
    const contactNav = {
        textDecoration: contactActive ? 'underline' : 'none'
    }

    return (
        <div className="Header">
            <nav className="flex items-center justify-center flex-wrap bg-amber-100 p-4 border-2 border-black">
                <div className="w-full block flex-grow md:flex md:items-center md:w-auto lg:flex lg:items-center lg:w-auto">
                    <div className="flex justify-center text-sm md:flex-grow lg:flex-grow">
                        <Link to="/" className="text-gray-800 dark:text-gray-200 mx-5 sm:mx-6t" style={homeNav} onClick={() => { setHomeActive(true); setAboutActive(false); setPortfolioActive(false); setContactActive(false); }}>Home</Link>
                        <Link to="/about" className="text-gray-800 dark:text-gray-200 mx-5 sm:mx-6t" style={aboutNav} onClick={() => { setHomeActive(false); setAboutActive(true); setPortfolioActive(false); setContactActive(false); }}>About Me</Link>
                        <Link to="/portfolio" className="text-gray-800 dark:text-gray-200 mx-5 sm:mx-6t" style={portfolioNav} onClick={() => { setHomeActive(false); setAboutActive(false); setPortfolioActive(true); setContactActive(false); }}>Portfolio</Link>
                        <Link to="/contact" className="text-gray-800 dark:text-gray-200 mx-5 sm:mx-6t" style={contactNav} onClick={() => { setHomeActive(false); setAboutActive(false); setPortfolioActive(false); setContactActive(true); }}>Contact Me</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;