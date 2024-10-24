import React from "react";
import "./VipPrivileges.css";

const VipPrivileges = () => {
  return (
    <div className="vip-privileges-container">
      <div className="vip-images-container">
        <img
          src="/img/Benefits_Page/vip1.png"
          alt="Image 1"
          className="vip-image-left"
        />
        <div className="vip-text-container">
          <h2 className="vip-heading">VIP PRIVILEGES</h2>
          <p className="vip-paragraph">
            Access premium features<br/>and exclusive rewards for<br/> top partners.
          </p>
        </div>
        <img
          src="/img/Benefits_Page/vip3.png"
          alt="Image 2"
          className="vip-image-right"
        />
      </div>
      <div className="vip-bottom-image-container">
        <img
          src="/img/Benefits_Page/vip2.png"
          alt="Image 3"
          className="vip-image-bottom"
        />
      </div>
    </div>
  );
};

export default VipPrivileges;
