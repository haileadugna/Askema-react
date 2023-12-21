import React from 'react';



export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-5 md:mb-0">
            <h6 className="text-uppercase mb-2">Wedding of your dreams</h6>
            <p className="mb-4 pb-2">
              The next generation of design systems.
            </p>
            <div className="flex space-x-4">
              <a href="javascript:;" className="text-secondary">
                <span className="text-lg fab fa-facebook" aria-hidden="true"></span>
              </a>
              <a href="javascript:;" className="text-secondary">
                <span className="text-lg fab fa-twitter" aria-hidden="true"></span>
              </a>
              <a href="javascript:;" className="text-secondary">
                <span className="text-lg fab fa-instagram" aria-hidden="true"></span>
              </a>
              <a href="javascript:;" className="text-secondary">
                <span className="text-lg fab fa-pinterest" aria-hidden="true"></span>
              </a>
              <a href="javascript:;" className="text-secondary">
                <span className="text-lg fab fa-github" aria-hidden="true"></span>
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
            <h6 className="text-sm">Pages</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="javascript:;" className="text-secondary">Login</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Register</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Add list</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Contact</a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h6 className="text-sm">Legal</h6>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="javascript:;" className="text-secondary">Terms</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">About Us</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Team</a>
              </li>
              <li>
                <a href="javascript:;" className="text-secondary">Privacy</a>
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
