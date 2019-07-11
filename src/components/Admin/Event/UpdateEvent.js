import React from 'react';
import { Redirect } from 'react-router-dom';

class UpdateEvent extends React.Component {
  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }
    
    return (
      <div>Form for Update Event</div>
    )
  }
}

export default UpdateEvent;