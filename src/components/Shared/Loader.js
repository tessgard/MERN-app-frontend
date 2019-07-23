import React from "react";
import "./Loader.css";

class Loader extends React.Component {
  render() {
    return (
      <div className="main-container" id="main-container">
        <div id="loader-container">
          <div
            class="spinner-border text-info"
            style={{ width: "100px", height: "100px" }}
          />
          <div>
            <h1>B</h1>
            <h1>C</h1>
            <h1>M</h1>
            <h1>A</h1>
          </div>
        </div>
      </div>
    );
  }
}
export default Loader;
