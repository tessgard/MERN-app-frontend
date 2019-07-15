import React from "react";
import "./OurStory.css";
import axios from "axios";
import { Link } from 'react-router-dom';

class OurStory extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  render() {
    const { onContentSelect, authentication } = this.props
    console.log(this.props);

    if (authentication) {
      return (
        <div className="aboutMainContainer">
  
          <div className="aboutMeDescription">
            <h1 className="bcmaPageHeaderH1">About Us</h1>
  
          </div>
          <div className="aboutBottomContainer">
            <div className="aboutBox">
              
              <br />
              <br />
              <br />
              <br />
              {this.state.data.map((item, index) => (
                <div className="aboutBoxDescription" key={index} >
                  <p>{item.description}</p>
                  <p>{item._id}</p>
                  <Link to="/admin/about/update" onClick={() => onContentSelect(item)}>Update</Link>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="aboutMainContainer">
  
          <div className="aboutMeDescription">
            <h1 className="bcmaPageHeaderH1">About Us</h1>
  
          </div>
          <div className="aboutBottomContainer">
            <div className="aboutBox">
              
              <br />
              <br />
              <br />
              <br />
              {this.state.data.map((item, index) => (
                <div className="aboutBoxDescription" key={index} >
                  <p>{item.description}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default OurStory;
