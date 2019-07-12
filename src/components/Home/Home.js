import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = props => {
  const { authentication } = props;

  if (!authentication) {
    return (
      <div className="homeMainContainer">
        <div className="homeVideoContainer">
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
            <Link to="/admin/login/" className="admin-link">
              <h3>admin</h3>
            </Link>
            <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="homeMainContainer">
        <div className="homeVideoContainer">
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
            <h3>Logged in as admin</h3>
            <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
