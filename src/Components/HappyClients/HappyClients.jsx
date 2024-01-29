import "./HappyClients.css";
import React from "react";
const HappyClients = () => {
  return (
    <div className="grey-div">
      <div className="happy-clients">
        <img src="./Images/happyclients.png" alt="" />
      </div>
      <div className="green-div">
        <h2>John Smith </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. It was in the 1960s with the <br />
          release of Letraset. Lorem Ipsum has been the <br />
          industry's standard dummy text ever since the 1500s.
          <br />
          recently with desktop.Lorem Ipsum is simply dummy
          <br /> text of the printing and typesetting industry.
        </p>
        <img src="/Images/arrows.png" alt="" />
      </div>
      <div className="clients-pictures">
        <img src="./Images/roundimages.png" alt="" />
      </div>
      
    </div>
    
  );
};

export default HappyClients;
