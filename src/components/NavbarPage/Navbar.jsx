import React, { useContext, useState, useEffect, useRef } from "react";
import DarkModeToggle from "../DarkMode/DarkModeToggle"; 
import './Navbar.css';
import { Link, useLocation } from "react-router-dom";
import { ThemeContext as ColorModeContext } from "../../ThemeContext";

function Navbar() {
    const { darkMode } = useContext(ColorModeContext);
    const [isActive, setIsActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const mobileMenuRef = useRef(null);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Close mobile menu on window resize if screen becomes larger
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 640) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleClick = () => {
        setIsActive(!isActive);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className='navbar-container text-center' data-aos="fade-down">
            <div className={`navbar ${darkMode ? 'dark-mode' : ''}`} ref={mobileMenuRef}>
                {/* Desktop Navigation Links */}
                <div className="navbar-links gap-2">
                    <Link to="/home" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`} onClick={handleClick}>
                        Home
                    </Link>
                    <Link to="/about" className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`} onClick={handleClick}>
                        About
                    </Link>
                    <Link to="/education" className={`navbar-link ${location.pathname === "/education" ? "active" : ""}`} onClick={handleClick}>
                        Education
                    </Link>
                    <Link to="/projects" className={`navbar-link ${location.pathname === "/projects" ? "active" : ""}`} onClick={handleClick}>
                        Projects
                    </Link>
                    <Link to="/certificates" className={`navbar-link ${location.pathname === "/certificates" ? "active" : ""}`} onClick={handleClick}>
                        Certificates
                    </Link>
                    <Link to="/services" className={`navbar-link ${location.pathname === "/services" ? "active" : ""}`} onClick={handleClick}>
                        Services
                    </Link>
                    <Link to="/contact" className={`navbar-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={handleClick}>
                        Contact
                    </Link>
                    <DarkModeToggle />
                </div>

                {/* Hamburger Menu Button */}
                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={handleMobileMenuToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className={`navbar-link ${location.pathname === "/" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Home
                    </Link>
                    <Link to="/about" className={`navbar-link ${location.pathname === "/about" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        About
                    </Link>
                    <Link to="/education" className={`navbar-link ${location.pathname === "/education" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Education
                    </Link>
                    <Link to="/projects" className={`navbar-link ${location.pathname === "/projects" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Projects
                    </Link>
                    <Link to="/certificates" className={`navbar-link ${location.pathname === "/certificates" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Certificates
                    </Link>
                    <Link to="/services" className={`navbar-link ${location.pathname === "/services" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Services
                    </Link>
                    <Link to="/contact" className={`navbar-link ${location.pathname === "/contact" ? "active" : ""}`} onClick={handleMobileLinkClick}>
                        Contact
                    </Link>
                    <div className="mobile-darkmode-container">
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;