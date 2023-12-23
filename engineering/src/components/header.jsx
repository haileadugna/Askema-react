import React, { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'; 
import image from '../Assets/Askema logo.png';

export default function Header() {

    const location = useLocation(); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
  return (

    
    <div className='header' >

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 320" className='svg'>
            <path fill="brown" fill-opacity="1" d="M0,192L40,186.7C80,181,160,171,240,181.3C320,192,400,224,480,218.7C560,213,640,171,720,154.7C800,139,880,149,960,170.7C1040,192,1120,224,1200,245.3C1280,267,1360,277,1400,282.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      <div className="header_logo">
        <img src={image} alt="Logo" />
        {/* <h2>Askema Engineering</h2> */}
      </div>
      <div className="header_nav">
      <ul>
        <li><NavLink to="/" activeClassName="active" exact>Home</NavLink></li>
        <li><NavLink to="/aboutus" activeClassName="active">AboutUs</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
        <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
        <li><NavLink to="/contactus" activeClassName="active">ContactUs</NavLink></li>
      </ul>
      </div>
      

      <div className="menu_icon" onClick={toggleMenu}>
        <i class="fas fa-bars"></i>
      </div>

      {/* {isMenuOpen && ( */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>

            <a href="/aboutus">
              <li>AboutUs</li>
            </a>

            <a href="/services">
              <li>Services</li>
            </a>
            
            <a href="/products">
              <li>Products</li>
            </a>
            
            <a href="/contactus">
              <li>ContactUs</li>
            </a>
          </ul>
        </div>
      {/* )} */}

    </div>
  )
}
