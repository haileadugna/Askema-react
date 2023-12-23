import React from 'react'
import Footer from '../footer'
import image1 from '../../Assets/brake.jpg';
import Cleints from '../body/cleints';

export default function AboutUs() {
  return (
    <div > 
      <section className='about'>
          <div className="content">
            <div className="askema">
              <div className="text">
                <h2>Askema Engineering</h2>
                
                <p>Manufactures eco-friendly brake and clutch solutions for diverse vehicles, prioritizing quality, customer satisfaction, and sustainability.</p>
              </div>
              <div className="image">
                <img src={image1} alt="" />
              </div>
            </div>

            <div className="problem">
              <h2>The Problem We Are Solving</h2>
              <hr />
              <p>Amidst the concerning backdrop of over 29,000 road accidents in Ethiopia in 2022, we've identified a crucial technical challenge. These accidents, often attributed to vehicle braking and clutch-related technical issues, demand innovative solutions for enhanced road safety and vehicle performance.</p>
            </div>

            <div className="solution">
              <h2>Our Solution</h2>
              <hr />
              <p>In response to Ethiopia's pressing car accident problem, primarily due to technical issues, we're dedicated to making a difference. Our solution involves crafting eco-friendly brake and clutch components, designed for enhanced vehicle safety. These parts are made from recycled materials, including waste from the leather, ceramic, and marble industries. Our mission is to provide a sustainable alternative, ensuring uncompromised quality and building trust among vehicle owners and organizations. We cater to small vehicle owners, heavy-duty truck companies, governmental and non-governmental bodies, prioritizing affordability and competitive pricing while promoting eco-conscious, circular production.</p>
            </div>


            <div className="vision">
              <h2>Our Vision</h2>
              <hr />
              <p>Our vision is to lead Ethiopia's automotive industry by offering affordable, non-metallic brake and clutch solutions for various vehicles, with a commitment to safety and economic growth through local manufacturing. Join us on our journey towards a cleaner, safer, and economically vibrant Ethiopian automotive landscape. Explore diverse job opportunities in our mission to transform 300,000 tons of wasted bones from 246 Ethiopian slaughterhouse industries into valuable resources, benefiting both the environment and our workforce.</p>
            </div>

            <h2>Why Choose Us?</h2>
            <div className="whyUs">
              
              <hr />
              
              <div className="box">
                <div className="import card show">
                  <img src={image1}alt="" />
                  <h3>Import Substitution</h3>
                  <p>Our products are locally manufactured, ensuring import substitution and supporting the Ethiopian economy.</p>
                </div>

                <div className="applicable card show">
                  <img src={image1} alt="" />
                  <h3>Applicable</h3>
                  <p>Our products are applicable to diverse vehicles, including cars, trucks, and buses.</p>
                </div>

                <div className="affordable card show">
                  <img src={image1} alt="" />
                  <h3>Affordable</h3>
                  <p>Our products are affordable, ensuring competitive pricing.</p>
                </div>

              </div>
            </div>

            <Cleints/>
          </div>
      </section>
      {/* <hr /> */}
      {/* <Footer/> */}
    </div>
  )
}
