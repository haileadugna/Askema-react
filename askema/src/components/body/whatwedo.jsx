// WhatWeDo.js
import React from 'react';
import './cleints.css';
import product1 from '../../Assets/product1.png';
import product2 from '../../Assets/product2.png';
import product3 from '../../Assets/product3.png';
import product4 from '../../Assets/product4.png';

export default function WhatWeDo() {
  return (
    <div className="whatwedo">
      <h1 className=" text-center mb-4">Our product</h1>
      <hr />

      <div className="products row g-4">
        <div className="col">
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product1} alt="Product 1" className="product-image" />
              <div className="text-center p-2">
                <h2>BRAKE</h2>
                <p>BRAKE LINING, BRAKE PAD, CLUTCH BUTTON/FACING</p>
              </div>
            </div>
          </div>
          
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product2} alt="Product 2" className="product-image" />
              <div className='text-center p-2'>
                <h2>ENGINE</h2>
                <p>WEICHAI, CUMMINS, CLUTCH FILTER, CYLINDER</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product3} alt="Product 3" className="product-image" />
              <div className='text-center p-2'>
                <h2>GEAR BOX</h2>
                <p>GEAR BOX, GEAR BOX PARTS</p>
              </div>
            </div>
          </div>
          
          <div className="product-card p-3 m-1">
            <div className="product-info d-flex align-items-center">
              <img src={product4} alt="Product 4" className="product-image" />
              <div className='text-center p-2'>
                <h2>OTHERS</h2>
                <p>STEERING, SUSPENSION, BODY PARTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
