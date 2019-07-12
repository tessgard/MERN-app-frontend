import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div className="addressMainContainer">
      <div className="bcmaDescription">
        <h5>music,</h5>
        <h5>dance &</h5>
        <h5>drama</h5>
      </div>
      <div className="addressBottomContainer">
        <div className="addressInnerContainer">
          <h1 className="addressHeader">Address</h1>
          <div className="addressProfilesContainer">
            <h2>Unit A/ 112 Victoria St Ballarat East VIC 3350</h2>
          </div>
        </div>
      </div>
      <div className="addressBottomContainer">
        <div className="addressInnerContainer">
          <h1 className="addressHeader">Parking / Public Transport</h1>
          <div className="addressProfilesContainer">
            <h2>
              Parking / Public Transport Parking is available on the premises.
              The closest bus stope is on ... only a 5 minute walk away
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
