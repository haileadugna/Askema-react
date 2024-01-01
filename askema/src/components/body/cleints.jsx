import React from 'react'
import './cleints.css'
import logo1 from '../../Assets/Ethioroad.png';
import logo2 from '../../Assets/addisababa.jpeg';
import logo3 from '../../Assets/airline.png';
import logo4 from '../../Assets/akirconstraction.jpeg';
import logo5 from '../../Assets/birhanconstraction.png';
import logo6 from '../../Assets/marathonmotors.png';
import logo7 from '../../Assets/nationalmotors.png';
import logo8 from '../../Assets/sunshineconstraction.png';

export default function Cleints() {
  return (
    <div className='clients'>
        <h2>Clients</h2>
        <hr />
        <p>Those are some of companies who have show interest on our products.</p>
        
        <div className="clients_logos">
            <div className="logo1">
              <img src={logo1} alt="" />
            </div>
            <div className="logo2">
              <div className="log2">
                <img src={logo2} alt="" />
              </div>
              <div className="log3">
                <img src={logo3} alt="" />
              </div>
            </div>

            <div className="logo3">
              <div className="logo4">
                <img src={logo4} alt="" />
              </div>
              <div className="logo5">
                <img src={logo5} alt="" />
              </div>
              <div className="logo6">
                <img src={logo6} alt="" />
              </div>
            </div>
            <div className="logo4">
              <div className="log7">
                <img src={logo7} alt="" />
              </div>
              <div className="log8">
                <img src={logo8} alt="" />
              </div>
            </div>

            <div className="logo5">
              <img src={logo8} alt="" />
            </div>

        </div>

    </div>
  )
}
