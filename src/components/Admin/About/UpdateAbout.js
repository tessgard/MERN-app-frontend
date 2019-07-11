import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class UpdateAbout extends React.Component {
  
  componentDidMount = async () => {
    try {
      const token = localStorage.getItem('token');
      const authenticated = await axios.get('http://localhost:5000/auth', { headers: { 'auth-x-token': token}});
      console.log(authenticated)
      console.log('authenticated')

      this.setState({
        authentication: true,
        curretUser: authenticated.data
      })
      console.log(this.state)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div>
        <form>
          <label htmlFor="description"> Description</label>
          <input type="text" name="description" id="description"/>
        </form>
      </div>
    )
  }
}

export default UpdateAbout;