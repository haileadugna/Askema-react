import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer className="footer py-5 ">
      <div className="container p-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <div className="mb-5 md:mb-0">
            <h6 className="text-uppercase mb-2">Wedding of your dreams</h6>
            <p className="mb-4 pb-2">
              The next generation of design systems.
            </p>
            <div className="flex space-x-4">
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
                    <FontAwesomeIcon icon={faPinterest} size="lg" />
                </a>

                <a href="javascript:;" className="text-secondary">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h6 className="text-sm">Company</h6>
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
            <h6 className="text-sm">Resources</h6>
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

        <div className="text-center">
          <p className="text-sm text-secondary">
            Copyright © 2022 Soft by Creative Tim & Loopple.
          </p>
        </div>
      </div>
    </footer>

  );
}
