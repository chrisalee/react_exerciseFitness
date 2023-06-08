import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={Logo} alt="logo" />
      </div>
      <h5 className="footer-text">Created by C Lee &copy; 2023 </h5>
    </div>
  );
};

export default Footer;
