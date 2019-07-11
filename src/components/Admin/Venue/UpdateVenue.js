import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateVenue extends React.Component{
  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }
    
    return (
      <div>Form for Update Venue</div>
    )
  }
}

export default UpdateVenue;