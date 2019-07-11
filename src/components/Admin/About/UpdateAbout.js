import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateAbout extends React.Component {
  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div>
        <h1>Update About</h1>
        <form>
          <label htmlFor="description"> Description</label>
          <input type="text" name="description" id="description"/>
        </form>
      </div>
    )
  }
}

export default UpdateAbout;