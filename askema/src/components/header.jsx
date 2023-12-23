import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import logo from '../Assets/Askema logo.png';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-transparent py-3 shadow-none">
      <div className="container">
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
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className={`collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 ${isMenuOpen ? 'show' : ''}`} id="navigation">
          <ul className="navbar-nav navbar-nav-hover ms-auto">
            <li className="nav-item mx-2">
              <NavLink to="/" className={`nav-link ps-2 cursor-pointer ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                href="#"
                className="nav-link ps-2 cursor-pointer dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/aboutus" className="dropdown-item">
                  Founder
                </NavLink>
                <NavLink to="/about" className="dropdown-item">
                  About the Company
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-2 dropdown">
              <a
                href="#"
                className="nav-link ps-2 cursor-pointer dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Product
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink to="/product" className="dropdown-item">
                  Product
                </NavLink>
                <NavLink to="/services" className="dropdown-item">
                  Services
                </NavLink>
              </div>
            </li>
            <li className="nav-item mx-2">
              <a href="javascript:void(0);" className="nav-link ps-2 cursor-pointer">
                Blog
              </a>
            </li>
            <li className="nav-item mx-2">
              <a href="/contactus" className="btn mb-0 cursor-pointer bg-gradient-dark">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
