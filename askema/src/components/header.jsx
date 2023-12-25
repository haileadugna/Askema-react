// Header.js
import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../Assets/Askema logo.png';
import './header.css';
import LanguageSwitcher from '../LanguageSwitcher';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent  py-3 ">
      <div className="container blur-lg">
        <NavLink to="/" className="navbar-brand w-8" data-config-id="brand">
          <img src={logo} width="120" height="60" alt="Logo" />
        </NavLink>

        <button
          className="navbar-toggler shadow-none ms-2 custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon mt-2 text-white">
            <i className="fas fa-bars"></i> {/* Font Awesome bars icon */}
          </span>
        </button>
        <div className={`collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ${isMenuOpen ? 'show' : ''}`} id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2 dropdown " onMouseEnter={toggleAboutDropdown} onMouseLeave={toggleAboutDropdown}>
              <a
                href="#"
                className={`nav-link ps-2 cursor-pointer dropdown-toggle ${isAboutDropdownOpen ? 'active' : ''}`}
                role="button"
              >
                About
              </a>
              <div
                className={`dropdown-menu ${isAboutDropdownOpen ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
                style={{ width: '100%', margin: 0 }}
              >
                <NavLink to="/founders" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                  Founder
                  <img src={logo} alt="Icon" height='70px' className="icon-image" />
                  
                </NavLink>
                <NavLink to="/aboutus" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                  About The Compony
                  <img src={logo} alt="Icon" height='70px' className="icon-image" />
                  
                </NavLink>
              </div>
            </li>

            <li className="nav-item mx-2 dropdown" onMouseEnter={toggleProductDropdown} onMouseLeave={toggleProductDropdown}>
              <a
                href="#"
                className={`nav-link ps-2 cursor-pointer dropdown-toggle ${isProductDropdownOpen ? 'active' : ''}`}
                role="button"
              >
                Product
              </a>
              <div
                className={`dropdown-menu ${isProductDropdownOpen ? 'show' : ''}`}
                aria-labelledby="navbarDropdown"
                style={{ width: '100%', margin: 0 }}
              >
                <NavLink to="/products" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                  Product
                  <img src={logo} alt="Icon" height='70px' className="icon-image" />
                  
                </NavLink>
                <NavLink to="/services" className="dropdown-item" style={{ height: '80px', width: '100%'}}>
                  Services
                  <img src={logo} alt="Icon" height='70px' className="icon-image" />
                  
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/comment" className="btn mb-0 cursor-pointer bg-gradient-dark">
                Blog
              </NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink to="/contactus" className="btn mb-0 cursor-pointer bg-gradient-dark">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}
