import React from "react";
import "./Classes.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

class Classes extends React.Component {
  state = {
    data: [],
    popup: false,
    errors: [],
    selectedClass: null
  };

  async componentDidMount() {
    this.getClasses();
  }

  getClasses = async () => {
    try {
      const response = await axios(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class"
      );
      console.log(response);
      this.setState({
        data: response.data
      });
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  deleteClass = async item => {
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class/${
          item._id
        }`
      );
      console.log(response);
      this.getClasses();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  classPopup = () => {
    // e.preventDefault();
    // const name = e.target.innerText;
    // const name = item.name;
    const name = this.state.selectedClass.name;
    const selectedClass = this.state.data.find((item, index) => {
      return item.name === name;
    });
    let popup = document.querySelector(".class-show-popup-hide");

    this.setState({
      popup: true,
      selectedClass: selectedClass
    });
  };

  removePopup = () => {
    this.setState({
      popup: false
    });
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.state.data);
    if (authentication) {
      return (
        <div className="main-container">
          <div id="overlay" className={this.state.popup && "show"} />
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">Classes</h1>
            <Link to="/admin/class/new">
              <button className="class-button">Add New Class</button>
            </Link>
            <div className="class-grid-container">
              {this.state.data.map((item, index) => (
                <div
                  key={index}
                  className="classes-card"
                  onMouseOver={() => this.setState({ selectedClass: item })}
                >
                  <div
                    className="classes-image"
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                  />
                  <div
                    id="classes-name-container"
                    className="classes-name-container"
                  >
                    <h3>{item.name}</h3>
                  </div>
                  <div className="buttons-container">
                    <Link
                      to="/admin/class/update"
                      onClick={() => onContentSelect(item)}
                    >
                      <button className="class-button">Update Details</button>
                    </Link>
                    <button
                      className="class-button"
                      onClick={() => this.deleteClass(item)}
                    >
                      Delete Class
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {this.state.popup && (
              <div className="class-show-popup">
                <div className="class-show-content-card">
                  <a href="#">
                    <h2 onClick={this.removePopup}>X</h2>
                  </a>
                  <br />
                  {/* <div className="class-popup-header">
                    <h2>{this.state.selectedClass.name}</h2>
                  </div> */}
                  <br />
                  <p>{this.state.selectedClass.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div id="overlay" className={this.state.popup && "show"} />

          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">Classes</h1>

            <div className="class-grid-container">
              {this.state.data.map((item, index) => (
                <div
                  key={index}
                  className="classes-card"
                  onMouseOver={() => this.setState({ selectedClass: item })}
                >
                  <div
                    className="classes-image"
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                  />
                  <div className="classes-name-container">
                    <h3>{item.name}</h3>
                  </div>
                  <div class="classes-middle-container">
                    <a href="#" onClick={this.classPopup}>
                      <div class="classes-details">More Information</div>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {this.state.popup && (
              <div className="class-show-popup">
                <div className="class-show-content-card">
                  <a href="#">
                    <h2 onClick={this.removePopup}>X</h2>
                  </a>
                  <br />
                  <div className="class-popup-header">
                    <h2>{this.state.selectedClass.name}</h2>
                  </div>
                  <div className="class-popup-description">
                    <p>{this.state.selectedClass.description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(Classes);
