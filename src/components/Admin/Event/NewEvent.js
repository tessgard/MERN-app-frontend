import React from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import axios from "axios";
import "./NewEvent.css";

class NewEvent extends React.Component {
  state = {
    name: "",
    description: "",
    image: "",
    errors: []
  };

  componentDidMount() {
    this.props.handleLoading();
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onFormSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const newEvent = {
      name: this.state.name,
      description: this.state.description,
      image: this.state.image
    };
    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/event/new",
        newEvent
      );
      console.log(response);
    } catch (error) {
      this.setState({
        errors: error.response
      });
      console.log(error.response);
    }
    this.props.history.push("/whats-on/events");
  };

  render() {
    const { authentication } = this.props;

    if (!authentication) {
      return <Redirect to="/admin/login" />;
    }

    return (
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>Add a Event</h1>
        </div>

        <div className="new-class-form-container">
          <form onSubmit={this.onFormSubmit} className="new-class-form">
            <label id="first-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.onInputChange}
            />
            <label htmlFor="description"> Description:</label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.onInputChange}
            />
            <label htmlFor="faculty">Image: </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.onInputChange}
            />
            <div className="classes-buttons">
              <button onClick={this.onFormSubmit}>Submit</button>
              <Link to="/classes">
                <button>Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(NewEvent);
