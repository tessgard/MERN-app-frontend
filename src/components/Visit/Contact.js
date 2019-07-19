import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    email: "",
    errors: []
  };

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
    return (
      <div className="main-container">
        <div className="inner-main-container">
          <h1 className="bcmaPageHeaderH1">Contact Us</h1>
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

          <div className="alternative-contact-container">
            <div className="contact-grid-container">
              <p>You can reach us at (03) 5331 3086</p>
            </div>
          </div>

          <div className="alternative-contact-container">
            <div className="contact-grid-container">
              <h2>Visit Us Directly</h2>
            </div>
          </div>
          <div className="alternative-contact-container">
            <div className="contact-grid-container">
              <p>Unit A/112 Victoria St, Ballarat East VIC 3350</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
