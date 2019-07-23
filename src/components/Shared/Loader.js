import React from "react";
import "./Loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className="main-container" id="main-container">
        <div className="inner-main-container">
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
}
export default Loader;
