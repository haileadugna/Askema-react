import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="d-flex justify-content-between p-5">
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faTelegram} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </div>
          </div>

          <div className="col-md-4">
            <h6 className="text-sm text-secondary">Company</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary">About Us</a>
              </li>
              <li>
                <a href="#" className="text-secondary">Careers</a>
              </li>
              <li>
                <a href="#" className="text-secondary"></a>
              </li>
              <li>
                <a href="#" className="text-secondary">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4">
            <h6 className="text-sm text-secondary">Resources</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-secondary">Blog</a>
              </li>
              <li>
                <a href="#" className="text-secondary">Service</a>
              </li>
              <li>
                <a href="#" className="text-secondary">Product</a>
              </li>
              <li>
                <a href="#" className="text-secondary"></a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-dark mt-4 mb-4" />

        <div className="text-center d-flex justify-content-center space-10">
          <p className="text-sm text-secondary">
            Copyright © {new Date().getFullYear()} |
          </p>
          <p className="text-sm text-secondary">
           | <a href="https://www.linkedin.com/in/ahmed-elsayed-0b0b3b1b0/" className="text-secondary">bytegineus lab</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
