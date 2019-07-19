import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class NewAbout extends React.Component {
  state = {
    description: "",
    errors: []
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    try {
      const newAbout  = { description: this.state.description };
      const response = await axios.post('https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about/new', newAbout);
      console.log(response)
    } catch (error) {
      this.setState({
        errors: error.response
      });
      console.log(error.response);
    }
    this.props.history.push('/about/our-story')
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />;
    }

    return (
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>New About</h1>
        </div>
        <div className="new-class-form-container">
          <form  onSubmit={this.onFormSubmit} className="new-class-form">
            <label htmlFor="description"> Description:</label>
            <textarea rows="10" cols="50" value={this.state.description} onChange={this.onInputChange} name="description" id="description"/>
            <div className="classes-buttons">
              <button onClick={this.onFormSubmit}>Submit</button>
              <Link to="/about/our-story"><button>Back</button></Link>
            </div>
          </form>
        </div>
      </div>
    )

  }
}

export default NewAbout;