import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = props => {
  const { authentication } = props;

  if (!authentication) {
    return (

      <div className="landing-main-container">
        <div className="hero-content-home">
          <div className="image-gallery-home">
          </div>
          <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
        </div>
        <div className="footerContainer">
          <div className="footerBox">
            <Link to="/admin/login/" className="admin-link">
              <p id="admin-link">admin login ></p>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="landing-main-container">
        <div className="hero-content-home">
          <div className="image-gallery-home">
          </div>
          <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
        </div>
        <div className="footerContainer">
          <div className="footerBox">
            <p id="admin-link">Logged in as admin</p>
          </div>
        </div>
    </div>
    );
  }
};

export default Home;
