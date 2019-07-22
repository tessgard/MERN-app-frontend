import React from "react";
import "./OurStory.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';


class OurStory extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.getAbouts();
  }

  getAbouts = async () => {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  };

  deleteAbout = async item => {
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about/${
          item._id
        }`
      );
      console.log(response);
      this.getAbouts();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.props);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>About Us</h1>
            </div>
            <Link to="/admin/about/new">
              <Button id="new-about-button" variant="outline-dark">
                Add New Paragraph
              </Button>
            </Link>
            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description">
                  <p>{item.description}</p>
                </div>
                <div className="about-button-container">
                  <Link
                    to="/admin/about/update"
                    onClick={() => onContentSelect(item)}
                  >
                    <button className="plain-button">Update</button>
                  </Link>
                  <button
                    className="delete-button"
                    onClick={() => this.deleteAbout(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>About Us</h1>
            </div>
            {this.state.data.map((item, index) => (
              <div
                className="about-description-container"
                id="about-description-container"
                key={index}
              >
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
