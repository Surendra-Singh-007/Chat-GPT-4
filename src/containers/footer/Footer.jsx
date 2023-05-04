import React from "react";
import "./footer.css";
import gpt4Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt4__footer section__padding">
      <div className="gpt4__footer-heading">
        <h1 className="gradient__text">
          Let's Learn Advanced Features Of ChatGPT-4 with us.
        </h1>
      </div>

      <div className="gpt4__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt4__footer-links">
        <div className="gpt4__footer-links_logo">
          <img src={gpt4Logo} alt="logo" />
          <p>Rising Flex 111,Porsche Design Tower, All Rights Reserved</p>
        </div>

        <div className="gpt4__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className="gpt4__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className="gpt4__footer-links_div">
          <h4>Get in touch</h4>
          <p>Rising Flex 111,Porsche Design Tower</p>
          <p>429-654-789</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="gpt4__footer-copyright">
        <p>© 2023 GPT-4. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
