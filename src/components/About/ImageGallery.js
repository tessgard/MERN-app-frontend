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
      <div className="galleryMainContainer">
        <div className="bcmaDescription">
          <h5>music,</h5>
          <h5>dance &</h5>
          <h5>drama</h5>
        </div>
        <div className="galleryBottomContainer">
          <div className="galleryInnerContainer">
            <h1 className="galleryHeader">Image Gallery</h1>
            <div className="galleryCardContainer">
              <div className="galleryCard">
                <div className="galleryImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageGallery;
