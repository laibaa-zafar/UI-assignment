import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="rlye-logo">
        <img src="./Images/rlyelogo.png" alt="" />
        <div className="footer-text-container">
          <p>
            Lorem Ipsum is simply dummy text of the printing <br/>and typesetting
            industry. Lorem Ipsum has been the <br/> industry's standard dummy text
            ever since the 1500s, <br/> when an unknown printer took a galley of type
            and <br/> scrambled it to make a type specimen book.<br/> It has survived not
            only five centuries, but also<br/> the leap into electronic typesetting,.
          </p>
        </div>
      </div>
      <div className="footer-remaining">
        <div className="quick-links">
          <h4>Quick Links</h4>
          <p>home</p>
          <p>privacy policy </p>
        </div>
        <div className="about-us">
          <h4>About Us</h4>
          <p>careers </p>
          <p>jobs </p>
        </div>
        <div className="contact-us">
          <h4>Contact Us</h4>
          <p>Houston, USA </p>
          <p>+92334567364 </p>
        </div>
      </div>

      <img className="footer-line" src="./Images/footerline.png" alt="" />

      <div className="all-copyrights-social">
        <div className="all-copyrights-reserved">All copyrights reserved</div>
        <div className="social-icons">
          {/* Move social media icons to the extreme left */}
          <img src="./Images/facebook.png" alt="Facebook" />
          <img src="./Images/twitter.png" alt="Twitter" />
          <img src="./Images/linkedin.png" alt="Instagram" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
