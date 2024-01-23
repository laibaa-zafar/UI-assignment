import React from "react";
import "./RideBooking.css";

const RideBooking = () => {
  return (
    <>
      <div className="main-div">
        <div className="how-to-book-a-ride">
          <img src="./Images/bookaride.png" alt="" />
        </div>
        <div className="lower-content">
          <div className="one-three">
            <div className="request-a-trip">
              <img  src="./Images/no1.png" alt="" />
              <h3> Request your trip </h3>
              <p>
                Choose your pickup and drop off <br />
                location, and the trip <br />
                type that meets your needs.
              </p>
            </div>
            <div className="enjoy-your-trip">
              <img src="./Images/no2.png" alt="" />
              <h3>Enjoy your trip </h3>
              <p>
                {" "}
                Meet your driver with the <br />
                help of our real-time GPS <br />
                service and enjoy your trip
              </p>
            </div>
          </div>

          <div className="mobile-image-container">
            <img src="./Images/phone.png" className="mobile-image" />
            <div className="circle-background" />
          </div>

          <div className="two-four">
            <div className="match-with-a-driver">
              <img src="./Images/no3.png" alt="" />
              <h3> Match with a driver </h3>
              <p>
                Rlyan will match you with the <br />
                nearest possible drivers so you <br />
                can choose your driver
              </p>
            </div>
            <div className="pay-and-rate">
              <img src="./Images/no4.png" alt="" />
              <h3> Pay and Rate </h3>
              <p>
                {" "}
                Pay with cash or card and rate your <br />
                rider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RideBooking;
