import React from "react";
import "./OurStory.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
    const { onContentSelect, authentication } = this.props;
    console.log(this.props);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">About Us</h1>

            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description">
                  <p>{item.description}</p>
                </div>

                <Link
                  id="about-update"
                  to="/admin/about/update"
                  onClick={() => onContentSelect(item)}
                >
                  Update
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">About Us</h1>

            {this.state.data.map((item, index) => (
              <div key={index}>
                <div className="about-description">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default OurStory;
