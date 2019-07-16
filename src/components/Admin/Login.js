import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {

  state = {}

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.login(this.state)
  }

  render() {
    const { authentication } = this.props
    
    if (authentication) {
      return <Redirect to="/" />
    }
    
    return (
      <div className="main-container">
        <div className="inner-main-container">
          <div style={{position: 'absolute', left: '200px', top: '200px'}}>
            <h1>Admin Login</h1>
            <form>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" onChange={this.handleInput}/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={this.handleInput}/>
              <button type="submit" onClick={this.handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;