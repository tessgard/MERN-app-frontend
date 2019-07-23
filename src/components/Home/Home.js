import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { Carousel } from "react-bootstrap";

class Home extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/carousel-images"
    );
    console.log(response);
    console.log(response.data[0].image);

    this.setState({
      data: response.data
    });
    this.props.handleLoading();
  }

  render() {
    const { authentication, onContentSelect } = this.props;
    console.log(this.state.data[0]);

    if (!authentication) {
      return (
        <div className="landing-main-container">
          <div className="alert-box">
            <div className="free-trial">
              <Link to="/visit/contact">
                We offer free trials for your first group class, contact us
                today to get started!
              </Link>
            </div>
          </div>
          <div className="hero-content-home">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[0].image
                    }
                    alt="First slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[1].image
                    }
                    alt="Third slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[2].image
                    }
                    alt="Third slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
              </Carousel>
            </div>
            <h3 id="punch-line">Professional Exciting Positive Friendly Fun</h3>
          </div>
          <div className="footer-container">
            <div className="footerBox">
              <Link to="/admin/login/" className="admin-link">
                <p id="admin-link">admin login ></p>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="landing-main-container">
          <div className="alert-box">
            <div className="free-trial">
              <Link to="/visit/contact">
                We offer free trials for your first group class, contact us
                today to get started!
              </Link>
            </div>
          </div>
          <div className="hero-content-home">
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[0].image
                    }
                    alt="First slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[1].image
                    }
                    alt="Third slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={
                      this.state.data.length === 3 && this.state.data[2].image
                    }
                    alt="Third slide"
                  />
                  <Carousel.Caption />
                </Carousel.Item>
              </Carousel>
            </div>
            <h3 id="punch-line">Professional Exciting Positive Friendly Fun</h3>
          </div>
          <div>
            <Link
              to="/admin/home/update-photos"
              onClick={() => onContentSelect(this.state.data[0])}
            >
              <button className="plain-button">Update Image 1</button>
            </Link>
            <Link
              to="/admin/home/update-photos"
              onClick={() => onContentSelect(this.state.data[1])}
            >
              <button className="plain-button">Update Image 2</button>
            </Link>
            <Link
              to="/admin/home/update-photos"
              onClick={() => onContentSelect(this.state.data[2])}
            >
              <button className="plain-button">Update Image 3</button>
            </Link>
          </div>
        </div>
      );
    }
  }
}

export default Home;
