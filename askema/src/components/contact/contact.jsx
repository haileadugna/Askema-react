import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <div className='bodyOfcontact'>
      <section className='contact'>
        <div className="content">
          <h2>Contact Us</h2>
          <p>Feel free to reach out to us with any inquiries or comments. We're eager to hear from you!</p>
        </div>
        <div className="container">
          <div className="contactinfo">
            <div className="box">
              <div className="icon"><i class="fa fa-map-marker"  aria-hidden="true"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>Phillipos ,Woreda 11, <br />Addis Ketema, <br />Addis Ababa, <br />Ethiopia</p>
              </div>
            </div>
            
            <div className="box">
              <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>+251932070973 <br />+251965341134</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
              <div>
                <div className="text">
                  <h3>Email</h3>
                  <p>h07842233@gmail.com <br /> bethlehemayele1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactForm">
            <form action="">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send" />
              </div>

            </form>
          </div>
        </div>

        <div className="contactFooter">
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
        
      </section>
      
    </div>
  )
}
