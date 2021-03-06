import React from "react";
import "./Events.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Events extends React.Component {
  state = {
    data: []
  };

  async getEvents() {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/event"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
    this.props.handleLoading();
  }

  async componentDidMount() {
    this.getEvents();
  }

  deleteEvent = async item => {
    console.log(item);
    try {
      const response = axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/event/${
          item._id
        }`
      );
      console.log(response);
      this.getEvents();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.props);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>What's On</h1>
            </div>
            <Link to="/admin/event/new">
              <Button variant="outline-dark">Add New Event</Button>
            </Link>

            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description" id="event-details-container">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <img src={item.image} />
                </div>

                <Link
                  id="event-update"
                  className="plain-button"
                  to="/admin/event/update"
                  onClick={() => onContentSelect(item)}
                >
                  Update
                </Link>
                <button
                  id="event-delete"
                  className="delete-button"
                  onClick={() => this.deleteEvent(item)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>What's On</h1>
            </div>
            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description" id="event-details-container">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <img src={item.image} />
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
