import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="rlye-logo">
        <img src="./Images/rlyelogo.png" alt="" />
        <div className="footer-text-container">
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Explicabo et,
            <br />
            assumenda facere, veritatis cum <br />
            facilis excepturi, fuga tempora neque
            <br />
            nostrum vero inventore corporis saepe
            <br />
            unde nam. Ipsam ducimus corporis
            <br />
            tempore!{" "}
          </p>
        </div>
      </div>
      {/* <div className="footer-text-container">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur <br/>
           adipisicing elit. Explicabo et,<br/>
          assumenda facere, veritatis cum <br/>
          facilis excepturi, fuga tempora neque<br/>
          nostrum vero inventore corporis saepe 
          <br/>unde nam. Ipsam ducimus corporis<br/>
          tempore!{" "}
        </p>
      </div> */}
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
      <div className="all-copyrights-reserved">All copyrights reserved</div>
      <div className="social-icons">
        <img src="./Images/facebook.png" alt="Facebook" />
        <img src="./Images/twitter.png" alt="Twitter" />
        <img src="./Images/linkedin.png" alt="Instagram" />
      </div>
    </div>
  );
};
export default Footer;
