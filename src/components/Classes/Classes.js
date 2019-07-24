import React from "react";
import "./Classes.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

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
      this.props.handleLoading();
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
    const name = this.state.selectedClass.name;
    const selectedClass = this.state.data.find((item, index) => {
      return item.name === name;
    });

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
            <div className="new-class-header" id="about-header">
              <h1>Classes</h1>
            </div>
            <Link to="/admin/class/new">
              <Button variant="outline-dark">Add New Class</Button>
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
                      <button className=" class-update-button">
                        Update Details
                      </button>
                    </Link>
                    <button
                      className="class-delete-button"
                      onClick={() => this.deleteClass(item)}
                    >
                      Delete Class
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div id="overlay" className={this.state.popup && "show"} />

          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Classes</h1>
            </div>
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
    // }
  }
}

export default withRouter(Classes);
