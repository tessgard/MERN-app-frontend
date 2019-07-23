import React from "react";
import "./NotFound.css";

class NotFound extends React.Component {
  componentDidMount() {
    console.log("inside not found");
    this.props.handleLoading();
  }
  render() {
    return (
      <div id="not-found-container">
        <div>not found</div>
      </div>
    );
  }
}

export default NotFound;
