import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StayUpdated.css';

const StayUpdated = () => {
  const navigate = useNavigate();
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
        navigate('/thank-you-subs');
      } else {
        console.log("Error", data);
        window.alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      window.alert("Network error. Please check your connection and try again.");
    }
  };
  return (
    <div className="stay-updated-section">
      <div className="content">
        <h2>Stay Updated with us!</h2>
        <p>Stay ahead with tips to earn more on the side.</p>
      </div>
      <form className="subscribe-box" onSubmit={handleSubmit}>
      <input
          type="email"
          name="email" // Add name attribute for Web3Forms
          placeholder="Your e-mail address"
          className="email-input"
          required
        />
         {/* Hidden fields for customization */}
         <input type="hidden" name="subject" value="New Subscription from StayUpdated" />
        <input type="hidden" name="from_name" value="Treasure Hint" />
        <input type="hidden" name="message" value="A new user has been subscribed for updates." />

        <button type="submit" className="subscribe-button">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default StayUpdated;
