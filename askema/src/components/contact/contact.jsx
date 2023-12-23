import React, {useState} from 'react'
import './contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

  const notify = () => toast("Thank you for contacting us!");
  const [formData, setFormData] = useState({
    subject: '',
    sender: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3333/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // console.log('response', response.ok)
      if (response.ok) {
        // Email sent successfully, show a success message
        
        notify();
        setFormData({
          subject: '',
          sender: '',
          message: '',
        });
      } else {
        // Handle the error
        alert('Email sending failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
            <form action="" onSubmit={handleSubmit} >
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" 
                name="subject" 
                required="required"  
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" 
                name="sender"
                value={formData.sender}
                onChange={(e) => setFormData({...formData, sender: e.target.value})} 
                required="required" 
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea 
                required="required"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="send" value="Send"  />
                <ToastContainer />
              </div>

            </form>
          </div>
        </div>

        
        
      </section>
      
    </div>
  )
}
