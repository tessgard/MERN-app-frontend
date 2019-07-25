import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
import Maps from "./MapContainer";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    email: "",
    description: "",
    errors: [],
    submitted: false,
    failed: false
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
      email: this.state.email,
      description: this.state.description
    };
    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/contact/new",
        newContact
      );
      console.log(response);
      try {
        const emailResponse = await axios.post(
          "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/send-email",
          newContact
        );
        console.log(emailResponse);
      } catch (error) {
        console.log(error.response);
      }

      if (response.status === 201) {
        this.setState({ submitted: true, failed: false });
      }
      console.log(this.state);
    } catch (error) {
      this.setState({
        errors: error.response,
        submitted: false,
        failed: true
      });
      console.log(this.state.errors);
      console.log(this.state.errors.data.errors[0].msg);
      console.log(this.state.errors.length);
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    console.log(this.state);

    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>Contact Us</h1>
            </div>
            {this.state.submitted && (
              <div class="alert alert-success" role="alert">
                Submitted Contact Form
              </div>
            )}
            {this.state.failed && (
              <div class="alert alert-danger" role="alert">
                {this.state.errors.data.errors[0].msg}
              </div>
            )}

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
                <label htmlFor="description">
                  Write a short description about your inquiry.
                </label>
                <textarea
                  id="contact-description-box"
                  type="text"
                  name="description"
                  value={this.state.description}
                  placeholder="Enter a Short Description"
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
            {this.state.submitted && (
              <div class="alert alert-success" role="alert">
                Submitted Contact Form
              </div>
            )}
            {console.log(this.state)}
            {this.state.failed && (
              <div class="alert alert-danger" role="alert">
                {this.state.errors.data.errors[0].msg}
              </div>
            )}
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
                <label htmlFor="description">
                  Write a short description about your inquiry.
                </label>
                <textarea
                  id="contact-description-box"
                  type="text"
                  name="description"
                  value={this.state.description}
                  placeholder="Enter a Short Description"
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
