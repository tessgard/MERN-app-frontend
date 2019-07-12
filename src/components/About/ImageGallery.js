import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
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
};

export default ImageGallery;
