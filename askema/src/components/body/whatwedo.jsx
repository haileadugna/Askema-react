import React from 'react'
import './cleints.css'
import product1 from '../../Assets/product1.png';
import product2 from '../../Assets/product2.png';
import product3 from '../../Assets/product3.png';
import product4 from '../../Assets/product4.png';

export default function WhatWeDo() {
  return (
    <div className='whatwedo'>
      
      <h1>What We Do</h1>
      <hr />

      <div className="products">
        <div className="pro1">
          <img src={product1} alt="" />
          <img src={product2} alt="" />

        </div>

        <div className="pro2">
          <img src={product3} alt="" />
          <img src={product4} alt="" />
        </div>
      </div>

    </div>
  )
}
