import React, { useEffect } from 'react';
import logo from "../assets/Img/Logo.png";
import "../assets/style/navbar.css";
import { useState } from 'react';


const Navbar = ({ setIsNavbarExpanded }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    // Function to handle hover to open dropdown
const handleHover = (event) => {
    const dropdown = event.currentTarget.querySelector('.dropdown-menu');
    dropdown.classList.add('show');
  };
  
  // Function to handle mouse leave to close dropdown
  const handleLeave = (event) => {
    const dropdown = event.currentTarget.querySelector('.dropdown-menu');
    dropdown.classList.remove('show');
  };

    // Handle toggling the navbar in mobile view
    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
        setIsNavbarExpanded(!isExpanded);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isExpanded) {
                setIsExpanded(false);
                setIsNavbarExpanded(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isExpanded, setIsNavbarExpanded]);

  
    return (
        <div  className={`Navbar-container ${isExpanded ? 'expanded' : ''}`}  >
            <nav className="navbar navbar-expand-lg navbar-light "
             style={{
                height: "90px",
                backgroundColor: "#ffffff",
             }}
            >
                <div className="container-fluid">
                    {/* Logo on the left side */}
                    <a className="navbar-brand " href="/" style={{marginLeft:"5rem"}} >
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: '140px' }}
                        />
                    </a>

                    {/* Toggle button for mobile view */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded={isExpanded}
                        aria-label="Toggle navigation"
                        onClick={toggleNavbar}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar items on the right side */}
                    <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {/* Products Dropdown */}
                            <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="productsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Products <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                                    <li><a className="dropdown-item" href="/">Interactive panel</a></li>
                                    <li><a className="dropdown-item" href="/">4K camera setup</a></li>
                                    <li><a className="dropdown-item" href="/">LED Displays</a></li>
                                    <li><a className="dropdown-item" href="/">Interactive Projectors</a></li>
                                    <li><a className="dropdown-item" href="/">Capture Systems</a></li>
                                    <li><a className="dropdown-item" href="/">Accessories</a></li>
                                    <li><a className="dropdown-item" href="/">Software</a></li>
                                </ul>
                            </li>
                            {/* Solutions Dropdown */}
                            <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="solutionsDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Solutions <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="solutionsDropdown">
                                    <li><a className="dropdown-item" href="/">Business Solutions</a></li>
                                    <li><a className="dropdown-item" href="/">Education Solutions</a></li>
                                    <li><a className="dropdown-item" href="/">Display Solutions</a></li>
                                </ul>
                            </li>

                            {/* Partners (Not a dropdown) */}
                            <li className="nav-item Partners">
                                <a className="nav-link" href="/" style={{ color: '#1D1D1D', marginRight: '1rem', fontWeight: '600' }}>
                                    Partners
                                </a>
                            </li>

                            {/* Support Dropdown */}
                            <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="supportDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Support <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                                    <li><a className="dropdown-item" href="/">Warranty Policy</a></li>
                                    <li><a className="dropdown-item" href="/">Help Center</a></li>
                                    <li><a className="dropdown-item" href="/">Contact Support</a></li>
                                    <li><a className="dropdown-item" href="/">Download Center</a></li>
                                    <li><a className="dropdown-item" href="/">Tutorial Video</a></li>
                                    <li><a className="dropdown-item" href="/">Service Request</a></li>
                                </ul>
                            </li>

                            {/* About Us Dropdown */}
                            <li className="nav-item dropdown" onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                                <a
                                    className="nav-link "
                                    href="/"
                                    id="aboutDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    About Us <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <li><a className="dropdown-item" href="/">Company</a></li>
                                    <li><a className="dropdown-item" href="/">News & Events</a></li>
                                    <li><a className="dropdown-item" href="/">Customer Stories</a></li>
                                    <li><a className="dropdown-item" href="/">Contact us</a></li>
                                </ul>
                            </li>

                            {/* Contact Sales Button */}
                            <li className="nav-item">
                                <a className="btn btn-primary ms-3" href="/">
                                    Contact Sales
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

