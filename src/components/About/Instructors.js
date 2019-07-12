import React from "react";
import "./Instructors.css";
import axios from "axios";

class Instructors extends React.Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const response = await axios("http://localhost:5000/instructor");
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  render() {
    return (
      <div className="instructorMainContainer">
        
        <div className="instructorBottomContainer">
          <div className="instructorInnerContainer">
            <h1 className="instructorHeader">Faculty</h1>
            <div className="instructorProfilesContainer">
              {this.state.data.map((item, index) => (
                <div className="instructorProfileCard" key={index}>
                  
                  <div className="instructorDetails">
                    <h2>Name : {item.name}</h2>
                    <h4>{item.description}</h4>
                    <h4>Expertise : {item.expertise}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Instructors;
