import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  componentDidMount() {
    console.log("inside not found");
    this.props.handleLoading();
  }
  render() {
    return (
      <div id="not-found-container">
        <img
          className="not-found-logo"
          src="https://images.vexels.com/media/users/3/144991/isolated/preview/9775445215013c4b0e1f62d6d181ed96-hip-hop-dancer-silhouette-by-vexels.png"
          alt="hip-hop"
        />
        <div id="loader-container" style={{ marginTop: "60px" }}>
          <div>
            <h1>B</h1>
            <h1>C</h1>
            <h1>M</h1>
            <h1>A</h1>
          </div>
          <br />
          <br />
          <h3>Page Not Found</h3>
          <br />
          <br />
          <Link to="/" className="">
            <button className="plain-button" id="not-found-button">Go Back To Home Page</button>
          </Link>
        </div>
        <img
          className="not-found-logo"
          src="https://i.pinimg.com/originals/37/17/d1/3717d16a904178dfa5e51ddb635dbb27.png"
          alt="ballerina"
        />
      </div>
    );
  }
}

export default NotFound;
