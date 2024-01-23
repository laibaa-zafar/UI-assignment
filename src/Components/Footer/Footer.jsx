import "./Footer.css";
import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="rlye-logo">
        <img src="./Images/rlyelogo.png" alt="" />
        <div className="text-container">
          <p className="and-typesetting-industry">{`Lorem Ipsum is simply dummy text of the printing `}</p>
          <p className="and-typesetting-industry">{`and typesetting industry. Lorem Ipsum has been the `}</p>
          <p className="and-typesetting-industry">{`industry's standard dummy text ever since the 1500s, `}</p>
          <p className="and-typesetting-industry">{`when an unknown printer took a galley of type and `}</p>
          <p className="and-typesetting-industry">{`scrambled it to make a type specimen book. `}</p>
          <p className="and-typesetting-industry">{`It has survived not only five centuries, but also `}</p>
          <p className="and-typesetting-industry">
            the leap into electronic typesetting
          </p>
        </div>
        <img className="footer-line" src="./Images/footerline.png" alt="" />
        <div className="all-copyrights-reserved">All copyrights reserved</div>
        <img className="group-icon1" alt="" src="./Images/facebook.png" />
        <img className="group-icon2" alt="" src="./Images/twitter.png" />
        <img className="vector-icon12" alt="" src="./Images/linkedin.png" />
      </div>
    </div>
  );
};

export default Footer;
