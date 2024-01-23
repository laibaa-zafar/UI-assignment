import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <div className="location-content">
      <div className="location-image">
        <img src="./Images/locationcar.png" alt="" className="locationcar" />
      </div>
      <div className="text-content">
        <div className="text-wrapper-8"> 
        <img src="./Images/About.png" alt="" />
        </div>
        <p className="lorem-ipsum-is">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br />
          industry. Lorem Ipsum has been the industry's standard dummy <br />
          text ever since the 1500s, when an unknown printer took a galley of{" "}
          <br />
          type and scrambled it to make a type specimen book. It has survived{" "}
          <br />
          not only five centuries, but also the leap into electronic
          typesetting, <br />
          remaining essentially unchanged.
        </p>
        <div className="text-wrapper-7">
          <button className="read-more"> Read More </button></div>
      </div>
    </div>
  );
};

export default Location;
