import React from "react";
import "./Events.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

class Events extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/event"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }

  deleteEvent = async (item) => {
    console.log(item)
    try {
      const response = axios.delete(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/event/${item._id}`)
      console.log(response)
      this.getEvents()
    } catch (error) {
      this.setState({ errors: error.response})
    }
  }

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.props);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">What's on</h1>
            <Link to='/admin/event/new'><Button variant="outline-dark" >Add New Event</Button></Link>

            {this.state.data.map((item, index) => (
              
              <div className="about-description-container" key={index}>
                <div className="about-description">

                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>

                <Link 
                  id="event-update"
                  className="plain-button"
                  to="/admin/event/update"
                  onClick={() => onContentSelect(item)}
                >
                  Update
                </Link>
                <Link
                  id="event-delete"
                  className="delete-button"

                  onClick={() => this.deleteEvent(item)}
                >
                  Delete
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">What's on</h1>

            {this.state.data.map((item, index) => (
              <div key={index}>
                <div className="about-description">
                <h2>{item.name}</h2>
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

export default Events;
