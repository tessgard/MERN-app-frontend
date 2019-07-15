import React from "react";
import "./ImageGallery.css";
import axios from "axios";

class ImageGallery extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/gallery"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }
  render() {
    return (
      <div className="main-container">
        <div className="inner-main-container">
        <h1 className="bcmaPageHeaderH1">Image Gallery</h1>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
