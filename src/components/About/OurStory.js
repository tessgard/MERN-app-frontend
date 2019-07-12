import React from "react";
import "./OurStory.css";
import axios from "axios";

class OurStory extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  render() {
    console.log(this.state.data);
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
              <div className="aboutBoxDescription" key={index}>
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

export default OurStory;
