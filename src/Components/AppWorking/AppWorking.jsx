import React from "react";
import "./AppWorking.css";

const AppWorking = () => {
  return (
    <div className="App-working-content">
      <div className="left-div">
        <img src="./Images/phoneonappworking.png" alt="" className="phone" />
      </div>
      <div className="right-div">
        <h1> How does this App Work? </h1>
        <div class="button-container">
          <button class="button1">Passenger</button>
          <button class="button2">Driver</button>
        </div>
        <div class="image-container">
          <img src="./Images/grouppicture.png" alt="" />

          <div className="main-text-container">
            <div class="text-container">
              <h3> Receive an offer</h3>
              <p> Specify your details and you will receive an offer </p>
            </div>
            <div class="text-container">
              <h3>Accept offer</h3>
              <p> The app will accept your offer</p>
            </div>
            <div class="text-container">
              <h3>Start your trip</h3>
              <p>Then you will start your trip</p>
            </div>
          </div>
        </div>
        <div className="button-apple">
          <button className="download-button">
            Download on apple play store{" "}
          </button>
        
        {/* <div className="download-playstore"> */}
          <button className="download-button">
            Download on the google PlayStore{" "}
          </button>
        </div>

      </div>
      </div>

      // </div>
    
  );
};

export default AppWorking;
