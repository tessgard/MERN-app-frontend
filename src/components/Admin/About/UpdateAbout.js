import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateAbout extends React.Component {
  state = {
    data: null,
    selectedContent: null,
    description: this.props.selectedContent.description || '',
    id: this.props.selectedContent._id,
    errors: []
  }

  componentDidMount() {
    console.log('About component did mount')
  }

  onInputChange = (event) => {
    this.setState({ description: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(this.state.description)
      const response = await axios.put(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/about/${this.state.id}`, {description: this.state.description})

      console.log(response)
      console.log(response.config)
    } catch (error) {
      this.setState({
        errors: error.response
      })
    }
    this.props.history.push('/about/our-story')
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }
    console.log('about render')
    console.log(this.state)

    return (
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>Update About</h1>
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

export default withRouter(UpdateAbout);