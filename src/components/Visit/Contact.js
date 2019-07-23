import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
import Maps from "./MapContainer";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    email: "",
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
    const newContact = {
      email: this.state.email
    };
    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/contact/new",
        newContact
      );
      console.log(response);
    } catch (error) {
      this.setState({
        errors: error.response
      });
      console.log(error.response);
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Contact Us</h1>
            </div>
            <Link id="admin-contact-button" to="/admin/visit/contact">
              View Contacts
            </Link>
            <div className="contact-grid-container">
              <form onSubmit={this.onFormSubmit}>
                <label htmlFor="email">
                  Provide us with your email! We'll get in contact.
                </label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Enter Email"
                  onChange={this.onInputChange}
                />
                <div className="classes-buttons">
                  <button onClick={this.onFormSubmit}>Submit</button>
                </div>
              </form>
            </div>
            <div className="contact-grid-container">
              <h5>You can reach us at (03) 5331 3086</h5>
            </div>
            <div className="contact-grid-container">
              <h2>Visit Us Directly</h2>
            </div>
            <div className="contact-grid-container">
              <h5>Unit A/112 Victoria St, Ballarat East VIC 3350</h5>
            </div>
            <div className="contact-grid-container">
              <>
                <Maps />
              </>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Contact Us</h1>
            </div>
            <div className="contact-grid-container">
              <form onSubmit={this.onFormSubmit}>
                <label htmlFor="email">
                  Provide us with your email! We'll get in contact.
                </label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Enter Email"
                  onChange={this.onInputChange}
                />
                <div className="classes-buttons">
                  <button onClick={this.onFormSubmit}>Submit</button>
                </div>
              </form>
            </div>

            <div className="contact-grid-container" id="contact-container">
              <h5>You can reach us at (03) 5331 3086</h5>
            </div>
            <div className="contact-grid-container">
              <h2>Visit Us Directly</h2>
            </div>
            <div className="contact-grid-container">
              <h5>Unit A/112 Victoria St, Ballarat East VIC 3350</h5>
            </div>
            <div className="contact-grid-container">
              <>
                <Maps />
              </>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Contact;
