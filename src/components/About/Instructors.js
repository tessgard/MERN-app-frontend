import React from "react";
import "./Instructors.css";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

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
    console.log(response);
    this.setState({
      data: response.data
    });
  };

  deleteInstructor = async item => {
    console.log(item);
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor/${
          item._id
        }`
      );
      console.log(response);
      this.getInstructors();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log("render");
    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Faculty</h1>
            </div>
            <Link to="/admin/instructor/new">
              <button id="new-about-button" className="class-button">
                Add New Instructor
              </button>
            </Link>

            <div className="instructors-container">
              {this.state.data.map((item, index) => (
                <div className="instructor-detail-main" key={index}>
                  <div className="instructor-detail-content">
                    <h2>{item.name}</h2>
                    <h4>Expertise: {item.description}</h4>
                    <h4>Faculty : {item.faculty}</h4>
                    <div>
                      <Link
                        to="/admin/instructor/update"
                        onClick={() => onContentSelect(item)}
                      >
                        <button className="class-button">Update Details</button>
                      </Link>
                      <button
                        id="instructor-delete"
                        className="class-button"
                        onClick={() => this.deleteInstructor(item)}
                      >
                        Delete Instructor
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
                    <h4>Expertise: {item.description}</h4>
                    <h4>Faculty : {item.faculty}</h4>
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
