import React from "react";
import "./Instructors.css";
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';
import {Button} from 'react-bootstrap';


class Instructors extends React.Component {
  state = {
    data: [],
    errors: []
  };

  async componentDidMount() {
    this.getInstructors()
  }

  getInstructors = async () => {
    const response = await axios.get('https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor');
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  deleteInstructor = async (item) => {
    console.log(item)
    try {
      const response = axios.delete(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor/${item._id}`)
      console.log(response)
      this.getInstructors()
    } catch (error) {
      this.setState({ errors: error.response})
    }
  }

  render() {
    const { onContentSelect, authentication } = this.props

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">Faculty</h1>
            <Link to='/admin/instructor/new'><Button variant="outline-dark">Add New Instructor</Button></Link>
            {this.state.data.map((item, index) => (
              <div className="instructor-detail-main" key={index}>
                <div className="instructor-detail-content">
                  <h2>Name : {item.name}</h2>
                  <h4>Expertise: {item.description}</h4>
                  <h4>Faculty : {item.faculty}</h4>
                  <Link to='/admin/instructor/update' onClick={() => onContentSelect(item)}><button className="instructos-update-button">Update Details</button></Link>
                  <button className="instructors-delete-button" onClick={() => this.deleteInstructor(item)}>Delete Instructor</button>
                </div>
              </div>
            ))}
          </div>
        </div>      
      );
    } else {
      return(
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">Faculty</h1>
            {this.state.data.map((item, index) => (
              <div className="instructor-detail-main" key={index}>
                <div className="instructor-detail-content">
                  <h2>Name : {item.name}</h2>
                  <h4>Expertise: {item.description}</h4>
                  <h4>Faculty : {item.faculty}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }    
  }
}
export default withRouter(Instructors);
