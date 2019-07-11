import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homeMainContainer">
      <div className="homeVideoContainer">
        Home
        <div className="bcmaDescription">
          <h5>music,</h5>
          <h5>dance &</h5>
          <h5>drama</h5>
        </div>
      </div>
      <div className="happeningContainer">
        <div className="happeningHeader">
          <h1>What's happening at BCMA?</h1>
        </div>

        <div className="happeningEventContainer">
          <div className="eventCardOuter">
            <div className="eventCardImage" />
            <div className="eventDetails">
              <h1>Title</h1>
              <h4>Description</h4>
              <p>Blah bleh bluh</p>
              <br />
              <h4>Dates</h4>
              <br />
              <h4>Price</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footerContainer">
        <div className="footerBox">
          <h3>admin</h3>
          <i class="fab fa-facebook" />
        </div>
      </div>
    </div>
  );
};

export default Home;
