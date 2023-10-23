import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      

           
      <div className="container1">
        <div className="reachus">
          <h3>Reach Us</h3>
          <div className="phonenumber">
            <div className="phonee">
              <p>
              <i className="fa fa-phone"></i>
              </p>
              
            </div>
            <div>
              <p>+251932070973</p>
              {/* <p>+251-915-418-696</p> */}
            </div>
          </div>
          <p>
            <div className="fa fa-envelope"></div> bethlehemayele1@gmail.com
          </p>
          <p>
            <div className="fa fa-location"></div> Phillipos ,Woreda 11,
                Addis Ketema,
                Addis Ababa,
                Ethiopia
          </p>
        </div>
        
        <div className="joinourpremium">
          <h3>Explore More</h3>
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/services">
              <li>Services</li>
            </a>
            
            <a href="/aboutus">
              <li>AboutUs</li>
            </a>
            <a href="/contactus">
              <li>ContactUs</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p id='copy'>© 2023 | Developed by <strong>Hake</strong></p>
        </div>
        <div className="social">
          
          <ul>
            <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-x"></i></a></li>
            <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><i className="fab fa-telegram"></i></a></li>
          </ul>
        </div>
      </div>

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svgForFooter'>
        <path fill="brown" fill-Opacity="1" d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,96C840,107,960,181,1080,181.3C1200,181,1320,107,1380,69.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg> */}
    </div>
  );
}
