import React from "react";
import "./Instructors.css";
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';

class Instructors extends React.Component {
  state = {
    data: []
  };
  async componentDidMount() {
    const response = await axios.get('https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor');
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  render() {
    const { onContentSelect, authentication } = this.props

    if (authentication) {
      return (
        <div className="instructorMainContainer">
          <h1 className="instructorHeader">Faculty</h1>
          
          <div className="instructorBottomContainer">
            <div className="instructorInnerContainer">
              <div className="instructorProfilesContainer">
                {this.state.data.map((item, index) => (
  
                  <div className="instructorProfileCard" key={index}>
                    <div className="instructorDetails">
                      <h2>Name : {item.name}</h2>
                      <h4>{item.description}</h4>
                      <h4>Faculty : {item.faculty}</h4>
                      <Link to='/admin/instructor/update' onClick={() => onContentSelect(item)}>Update</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="instructorMainContainer">
          <h1 className="instructorHeader">Faculty</h1>
          
          <div className="instructorBottomContainer">
            <div className="instructorInnerContainer">
              <div className="instructorProfilesContainer">
                {this.state.data.map((item, index) => (
  
                  <div className="instructorProfileCard" key={index}>
                    <div className="instructorDetails">
                      <h2>Name : {item.name}</h2>
                      <h4>{item.description}</h4>
                      <h4>Faculty : {item.faculty}</h4>
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
}

export default withRouter(Instructors);
