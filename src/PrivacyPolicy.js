import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="Bg-control-privacy">
    <div className="privacy-policy-container">
    <p className="privacy-paragraph">
    Treasure Hint ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or participate in the Treasure Hint Affiliate Program. It also describes our compliance with SMS/MMS regulations, including opt-in consent, opt-out procedures, and data retention practices. Please read this policy carefully to understand how we handle your data.
    </p>
    <h2 className="privacy-subheader">Scope of This Policy</h2>
    <p className="privacy-paragraph"> This Privacy Policy applies to all data collected through our website, mobile applications, SMS/MMS campaigns, and other services Treasure Hint offers.</p>
    <h2 className="privacy-header">Information We Collect</h2>
    <h2 className="privacy-subheader">Personal Data</h2>
    <p className="privacy-paragraph">We may collect personal identification information, including:
        <ul>
            <li> Name, email address, phone number, and mailing address.
            </li>
            <li> Payment information for processing transactions.
            </li>
            <li>  Data necessary to provide services, including preferences and interests.
            </li>
         </ul>
    </p>
    <h2 className="privacy-subheader"> Non-Personal Data</h2>
    <p className="privacy-paragraph"> We collect non-personal identification information such as browser type, device type, operating system, and usage details for analytics and site optimization.
    </p>
    <h2 className="privacy-subheader"> Usage Data</h2>
    <p className="privacy-paragraph"> We may collect information such as IP address, browser type, pages visited, time spent on pages, and other usage data to improve the user experience and enhance security.</p>
    <h2 className="privacy-subheader">How We Use Your Information</h2>
    
    <p className="privacy-paragraph">We use the data collected for the following purposes</p>
    <p className="privacy-paragraph">
    <ul>
        <li><strong>To Provide Services:</strong> Deliver services, process transactions, and communicate with you about your account.</li>
        <li><strong>To Improve Experiences:</strong> Optimize website functionality, personalize user interactions, and improve service offerings.</li>
        <li><strong>To Send Communications:</strong> Share updates, marketing messages, and account notifications based on your preferences.</li>
        <li><strong>To Ensure Compliance: </strong> Comply with legal obligations and regulatory requirements.</li>
    </ul>
    </p>
    <h2 className="privacy-subheader">SMS/MMS Messaging Terms</h2>
    <p className="privacy-paragraph">We use SMS/MMS messaging to send essential updates, promotional offers, and notifications to users who have opted to receive such messages.</p>
    
    <h2 className="privacy-subheader">Consent and Opt-In</h2>
    <p className="privacy-paragraph">By providing your phone number and explicitly opting in, you consent to receive SMS/MMS messages from Treasure Hint. These may include service updates, marketing communications, and other relevant notifications.</p>
   
    <h2 className="privacy-subheader">Message Frequency and Fees</h2>
    <p className="privacy-paragraph">Message frequency varies based on your engagement. <strong>Standard message and data rates may apply</strong>.</p>
   
    <h2 className="privacy-subheader">Opt-Out Instructions</h2>
    <p className="privacy-paragraph">You may opt out of receiving SMS/MMS messages at any time by replying <strong>"STOP"</strong> to any message. Once you opt out, you will no longer receive SMS/MMS communications unless you opt in again.</p>
   
    <h2 className="privacy-subheader">Assistance and Support</h2>
    <p className="privacy-paragraph">For help with SMS/MMS communications, reply <strong>"TEAM"</strong>or contact us at </p>
    <p><a href="mailto:HR-HQ7@TreasureHint.com" style={{ color: '#f8cf40' }}>HR-HQ7@TreasureHint.com</a></p>


    <h2 className="privacy-subheader">How We Protect Your Information</h2>
      <p className="privacy-paragraph">We adopt robust data collection, storage, and processing practices to protect your data from unauthorized access, alteration, disclosure, or destruction. Our security measures include encryption, firewalls, and secure data handling protocols.</p>
     
      <h2 className="privacy-subheader">Sharing Your Personal Information</h2>
     
      <p className="privacy-paragraph">We do not sell, trade, or rent users' data to third parties. However, we may share information:
      <ul>
            <li> With <strong>service providers</strong> who assist in delivering our services (e.g., payment processors, analytics tools).
            </li>
            <li> For <strong>legal compliance</strong> (e.g., responding to valid requests by public authorities).
            </li>
            <li>  During <strong>business transfers</strong> (e.g., in the event of a merger or acquisition).
            </li>
         </ul>
      </p>
      <h2 className="privacy-subheader">Cookies and Tracking Technologies</h2>
      <p className="privacy-paragraph">We use cookies to enhance your experience, analyze site usage, and assist marketing efforts. Users can manage cookie preferences through browser settings or opt-out tools.
      </p>

      <h2 className="privacy-subheader">Your Data Protection Rights</h2>
      <p className="privacy-paragraph">You have the following rights:</p>
    
    <p className="privacy-paragraph">
    <ul>
        <li><strong>Access and Rectification:</strong> Request a copy of your data or correct inaccurate information.</li>
        <li><strong>Erasure and Restriction:</strong> Request deletion or limitation of your data under specific conditions.</li>
        <li><strong>Objection and Portability:</strong> Object to processing or requesting data transfer to another organization.</li>
        <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
        <li><strong>File Complaints:</strong> If your data rights are violated, submit concerns to the relevant authorities.
        </li>
   </ul>
    </p>

    <h2 className="privacy-subheader">Data Retention</h2>
    <p className="privacy-paragraph">We retain personal data only as long as necessary for the purposes for which it was collected, to comply with legal obligations, or for backup purposes.</p>
    <ul>
        <li><strong>Account Data:</strong> Retained while your account is active or until you request deletion.</li>
        <li><strong>Transaction Data:</strong> Retained for seven years for auditing and compliance.</li>
        <li><strong>Marketing Data: </strong> Retained until you opt out of communications.</li>
   </ul>
      <h2 className="privacy-subheader">Changes to This Privacy Policy </h2>
      <p className="privacy-paragraph">We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or operational reasons. Significant changes will be communicated through notifications on our website or email.</p>
      
      <h2 className="privacy-subheader">Contact Information</h2>
      <p>If you have questions or concerns about this Privacy Policy, please get in touch with us:
      </p>
      <ul>
        <li>Email: <a href="mailto:HR-HQ7@TreasureHint.com" style={{ color: '#f8cf40' }}>HR-HQ7@TreasureHint.com</a></li>
        <li>Phone Number: +1 (886) 677-HINT</li>
   </ul>
   <p>We are committed to addressing your inquiries and ensuring your data privacy.
   </p>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
