import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faTelegram } from '@fortawesome/free-brands-svg-icons'
import 'tailwindcss/tailwind.css';


export default function Footer() {
  return (
    <footer className="footer py-5 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className="mb-5 md:mb-0">
            {/* <h6 className="text-uppercase mb-2">Wedding of your dreams</h6>
            <p className="mb-4 pb-2">
              The next generation of design systems.
            </p> */}
            {/* <h6 className="text-sm marker:">Social Media</h6> */}
            <div className="flex space-x-4 my-7">
                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>

                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>

                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>

                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faTelegram} size="lg" />
                </a>

                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faTiktok} size="lg" />
                </a>
              
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h6 className="text-sm text-secondary-200">Company</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="javascript:;" className="text-secondary">About Us</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Careers</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Press</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Blog</a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h6 className="text-sm text-secondary-200">Resources</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="javascript:;" className="text-secondary">Blog</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Service</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Product</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Pricing</a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="horizontal dark mt-8 mb-4" />

        <div className="text-center flex space-x-10">
          <p className="text-sm text-secondary">
            Copyright © 2022 

          </p>
          <p className="text-sm text-secondary-200">
            developed by <a href="https://www.linkedin.com/in/ahmed-elsayed-0b0b3b1b0/" className="text-secondary">bytegineus lab</a>
          </p>
        </div>
      </div>
    </footer>

  );
}
