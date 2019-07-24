import React from "react";
import "./Instructors.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


class Instructors extends React.Component {
  state = {
    data: [],
    errors: []
  };

  async componentDidMount() {
    this.getInstructors();
  }

  getInstructors = async () => {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor"
    );
    this.setState({
      data: response.data
    });
    this.props.handleLoading();
  };

  deleteInstructor = async item => {
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor/${
          item._id
        }`
      );
      this.getInstructors();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Faculty</h1>
            </div>
            <Link to="/admin/instructor/new">
              <Button variant="outline-dark">Add New</Button>
            </Link>
            <div className="instructors-container">
              {this.state.data.map((item, index) => (
                <div className="instructor-detail-main" key={index}>
                  <div className="instructor-detail-content">
                    <h2>{item.name}</h2>
                    <p>Expertise: {item.description}</p>
                    <p>Faculty : {item.faculty}</p>
                    <div>
                      <Link
                        to="/admin/instructor/update"
                        onClick={() => onContentSelect(item)}
                      >
                        <button className="class-update-button">
                          Update
                        </button>
                      </Link>
                      <button
                        id="instructor-delete"
                        className="class-delete-button"
                        onClick={() => this.deleteInstructor(item)}
                      >
                        Delete
                      </button>
                    </div>
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
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Faculty</h1>
            </div>
            <br />
            <div className="instructors-container">
              {this.state.data.map((item, index) => (
                <div className="instructor-detail-main" key={index}>
                  <div className="instructor-detail-content">
                    <h2>{item.name}</h2>
                    <p>Expertise: {item.description}</p>
                    <p>Faculty : {item.faculty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}
export default withRouter(Instructors);
