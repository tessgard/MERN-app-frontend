import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  state = {};

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { authentication } = this.props;

    if (authentication) {
      return <Redirect to="/" />;
    }

    return (
      <div className="main-container" id="new-login-main-container">
        <div className="new-class-header">
          <h1>Admin Login</h1>
        </div>
        <div className="new-class-form-container">
          <form className="new-class-form">
            <label id="first-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={this.handleInput}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={this.handleInput}
            />
            <div className="classes-buttons">
              <button type="submit" onClick={this.handleLogin}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
