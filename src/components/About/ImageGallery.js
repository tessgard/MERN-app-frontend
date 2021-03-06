import React from "react";
import "./ImageGallery.css";
import axios from "axios";

class ImageGallery extends React.Component {
  state = {
    images: null,
    popup: false,
    currentImage: null
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/images/get-objects"
    );

    // lazy loading to load up only images in viewport to optimise load time

    const lazyImages = [...document.querySelectorAll(".images")];
    const inAdvance = 300;

    function lazyLoad() {
      lazyImages.forEach(image => {
        if (
          image.offsetTop <
          window.innerHeight + window.pageYOffset + inAdvance
        ) {
          image.src = image.dataset.src;
        }
      });
    }

    lazyLoad();

    this.setState({
      images: response.data
    });
    this.props.handleLoading();
  }

  imagePopup = e => {
    e.preventDefault();
    this.setState({
      popup: true,
      currentImage: e.currentTarget.src
    });
  };

  removePopup = () => {
    this.setState({
      popup: false
    });
  };

  render() {
    const imageState = this.state.images;
    if (!imageState) {
      return null;
    } else {
      const imageArr = imageState.imageUrls;

      return (
        <div className="main-container">
          <div id="overlay" className={this.state.popup && "show"} />
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Image Gallery</h1>
            </div>
            <div className="gallery-outer-container">
              {imageArr.slice(1).map(url => (
                <img
                  onClick={this.imagePopup}
                  className="images rounded"
                  src={url}
                  alt="Gallery"
                />
              ))}
            </div>
            {this.state.popup && (
              <div className="image-show-popup">
                <div className="image-show-image-card">
                  <img
                    className="image-popup-large"
                    src={this.state.currentImage}
                    alt="Gallery"
                  />
                  <br />
                  <a id="closing-link-image" href="#">
                    <h2 onClick={this.removePopup}>x</h2>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default ImageGallery;
