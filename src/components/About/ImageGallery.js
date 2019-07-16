import React from "react";
import "./ImageGallery.css";
import axios from "axios";

class ImageGallery extends React.Component {
  state = {
    images: null
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/images/get-objects"
    );
    console.log(response);
    this.setState({
      images: response.data
    });

    
  }

  

  render() {
    const imageState = this.state.images
    if (!imageState) {
      return null
    } else {
      const imageArr = imageState.imageUrls
      console.log(imageArr)
      return (
        
        <div className="main-container">
          <div className="inner-main-container">
          <h1 className="bcmaPageHeaderH1">Image Gallery</h1>
            <div className="gallery-outer-container">
            
            {imageArr.slice(1).map((url ) => (
              <div className="image-thumbnail">   
                <img className="images" src={url}></img>
              </div>
          ))}



      


            </div>
          </div>
        </div>
        
      );
    }
  }
}

export default ImageGallery;
