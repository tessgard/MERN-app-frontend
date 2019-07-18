import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import axios from "axios";


class Home extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios.get(
      'https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/carousel-images'
    );
    console.log(response);
    console.log(response.data[0].image)

    this.setState({
      data: response.data
    });
  }

  render() {
    const { authentication } = this.props
    console.log(this.state.data[0]);

// const Home = props => {
// const { authentication } = props;



  if (!authentication) {
    return (
      <div className="landing-main-container">
        <div className="alert-box">
          <div className="free-trial">
            <a  href="#">We offer free trials for your first group class, contact us today to get started!</a>
          </div>
        </div>
        <div className="hero-content-home">
          <div className="image-gallery-home">

          {/* ----------------------------------- */}

            <div>
    <div class="carousel">
        <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
                <div class="slide-image">

                  <img src={this.state.data.length === 3 && this.state.data[0].image}></img>


                </div>
                <div class="carousel-controls">
                    <label for="img-3" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-2" class="next-slide">
                      <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
                <div class="slide-image">
                    
                <img src={this.state.data.length === 3 && this.state.data[1].image}></img>


                </div>
                <div class="carousel-controls">
                    <label for="img-1" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-3" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
                <div class="slide-image">

                    <img src={this.state.data.length === 3 && this.state.data[2].image}></img>

                </div>
                <div class="carousel-controls">
                    <label for="img-2" class="prev-slide">
                        <span>&lsaquo;</span>
                    </label>
                    <label for="img-1" class="next-slide">
                        <span>&rsaquo;</span>
                    </label>
                </div>
            </li>
           
        </ul>
    </div>
</div>

{/* ------------------------------- */}

          </div>

          <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
        </div>
        <div className="footerContainer">
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
              <a  href="#">We offer free trials for your first group class, contact us today to get started!</a>
            </div>
        </div>
        <div className="hero-content-home">
          <div className="image-gallery-home">

          

          </div>

          <h3 id="punchLine">Professional Exciting Positive Friendly Fun</h3>
        </div>
        <div className="footerContainer">

          <div className="footerBox">
            <p id="admin-link">Logged in as admin</p>
          </div>
        </div>
      </div>
    );
  }
}
};

export default Home;
