import React from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const handleSubs = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "b5abfd5d-25ff-4873-9f66-f528994278df");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        window.alert("Subscribed Successfully");
        event.target.reset();
        navigate('/thank-you-subs');
      } else {
        console.log("Error", data);
        window.alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      window.alert("Network error. Please check your connection and try again.");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "b5abfd5d-25ff-4873-9f66-f528994278df");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        window.alert("Subscribed Successfully");
        event.target.reset();
        navigate('/thank-you-queries');
      } else {
        console.log("Error", data);
        window.alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      window.alert("Network error. Please check your connection and try again.");
    }  
  };
  return (
    <div>
    <div className="contact-container">
  {/* Left Column */}
  <div className="left-column">
    
    {/* Newsletter Section */}
    <div className="newsletter-section">
      <h2>Our Newsletter</h2>
      <p>Stay ahead with tips to earn more on the side.</p>
      
      <form className="newsletter-form" onSubmit={handleSubs}>
        <div className="newsletter-bg">
        <input type="email" name="email" placeholder="Your e-mail address" required />  
        {/* Hidden fields for customization */}
        <input type="hidden" name="subject" value="New Subscription from Newsletter" />
        <input type="hidden" name="from_name" value="Treasure Hint" />
        <input type="hidden" name="message" value="A new user has been subscribed for Newsletter." />
        </div> 
        <button  type="submit" >SUBSCRIBE</button>
      </form>
   
    </div>
    {/* Contact Info Section */}
    <div className="contact-info-section">
    <p><i className="fas fa-clock"></i> <strong>Monday - Friday</strong><br />&emsp;8:00 a.m. - 8:00 p.m. EST</p>
    <p><i className="fas fa-map-marker-alt"></i> New York, NY</p>
    <p><i className="fas fa-phone-alt"></i> +1 (886) 677-HINT</p>
      <div className="social-links">
        <a href="https://www.facebook.com/people/Treasure-Hint/61562184812103/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com/treasurehintcom/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com/TreasureHintcom" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-x-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/company/treasure-hint/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
        </a>
      </div>

    </div>
  </div>

  {/* Right Column */}
  <div className="right-column">
    {/* Form Section */}
    <div className="contact-form">
      <h2>Fill out the form and we'll get back to you.</h2>
      <form onSubmit={handleSubmit}>
        <label>WHAT ARE YOU HERE FOR? </label>
        <select name="Select">
          <option>Please Select</option>
          <option>Partnership</option>
          <option>Request Meeting</option>
          <option>Request Demo</option>
          <option>Other (Please Specify)</option>
        </select>
        <label>WHAT CAN WE HELP YOU WITH</label>
        <textarea name="Description" rows="3"></textarea>
        <div className="form-grid">
          <input type="text" name="Name" placeholder="NAME" required />
          <input type="email" name="Email" placeholder="EMAIL" required />
          <input type="text" name="Company" placeholder="COMPANY" required />
          <input type="text" name="Phone Number" placeholder="PHONE NUMBER" required />
          <input type="text" name="Department" placeholder="DEPARTMENT" required />
          <input type="text" name="Position" placeholder="POSITION" required />
             {/* Hidden fields for customization */}
        <input type="hidden" name="subject" value="New Query submitted" />
        <input type="hidden" name="from_name" value="Treasure Hint" />
        <input type="hidden" name="message" value="A new query has been generated for review." />
        </div>
        <div className="checkbox">
          <input type="checkbox" id="chk1" name="checkbox" value="Checked" required />
          <label for="chk1">By checking this box, you agree to receive text messages and emails at the contact information ​provided. Standard messages and data rates may apply. By clicking SUBMIT NOW, you agree to our ​Legal Notice and Privacy Policy.</label>
        </div>
        <button type="submit" className="submit-btn">SUBMIT</button>
      </form>
    </div>
  </div>
</div>
</div>
  );
};

export default ContactUs;
