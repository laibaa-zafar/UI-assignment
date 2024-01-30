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
        <div className="button-container">
          <button className="button1">Passenger</button>
          <button className="button2">Driver</button>
        </div>
        <div className="image-container">
          <img src="./Images/grouppicture.png" alt="" />

          <div className="main-text-container">
            <div className="text-container">
              <h3> Receive an offer</h3>
              <p> Specify your details and you will receive an offer </p>
            </div>
            <div className="text-container">
              <h3>Accept offer</h3>
              <p> The app will accept your offer</p>
            </div>
            <div className="text-container">
              <h3>Start your trip</h3>
              <p>Then you will start your trip</p>
            </div>
          </div>
        </div>
        <div className="button-apple">
          <button className="download-button">
            <img
              src="./Images/applestore.png"
              alt="Apple"
              className="button-icon"
            />
            Download on <br />
            Apple Play Store
          </button>
          <button className="download-button">
            <img
              src="./Images/playstore.png"
              alt="PlayStore"
              className="button-icon"
            />
            Download on <br />
            Play Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppWorking;
