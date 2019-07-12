import React from 'react';
import { Redirect } from 'react-router-dom';

class NewEvent extends React.Component {
  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div>Form for New Event</div>
    )
  }
}

export default NewEvent;