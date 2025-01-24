import React from 'react';
import './Contact.css';
import yashvant from '../../../public/assets/yashvant.jpg'
import yash from '../../../public/assets/yash.jpg'

import { FaEnvelope, FaPhone } from 'react-icons/fa';


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1d4478d6-6253-4d7a-a7b2-5c28b8d5b758");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact'>
      <div className="contact-div">
        
      </div>
      <div className='contact'>
        <div className="contact-col">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.273282640807!2d76.52477767541386!3d31.70842907412846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904d5487e12c4a1%3A0x395f92d3a202a7d0!2sNational%20Institute%20of%20Technology%2C%20Hamirpur!5e0!3m2!1sen!2sin!4v1726667105773!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
        
        <div className='contact-col'>
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder="Enter your phone number" required />
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder='Enter your message' required ></textarea>
            <button type="submit" className='btn dark-btn'>Submit Now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      {/* Heading and Contact Information */}
      <div className="contact-divs">
      </div>
      
      <div className="contact">
        <div className="contact-col contact-box">
          <div className="contact-info">
            <div className="photo-container">
              <img src={yash} alt="Yash" />
            </div>
            <p>
              <strong className='text'>Yash Sisodia</strong><br />
              <span className="contact-info-item">
               <a href="mailto:ysisodia77@gmail.com"> <FaEnvelope id='icon'/> </a>ysisodia77@gmail.com
              </span>
              <span className="contact-info-item">
                <a  href="tel:+919131903258"> <FaPhone id='icon' /> </a>  +91 9131903258
              </span>
            </p>
          </div>
        </div>

        <div className="contact-col contact-box">
          <div className="contact-info">
            <div className="photo-container">
              <img src={yashvant} alt="Yashvant" />
            </div>
            <p>
              <strong className='text'>Yashvant Singh</strong><br />
              <span className="contact-info-item">
               <a href="mailto: yashvantsingh2k3@gmail.com"><FaEnvelope id='icon'  /> </a> yashvantsingh2k3@gmail.com
              </span>
              <span className="contact-info-item" >
                <a href="tel:+919458609060"><FaPhone id='icon'  /></a> +91 9458609060
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
