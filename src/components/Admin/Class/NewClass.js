import React from 'react';
import { Redirect } from 'react-router-dom';

class NewClass extends React.Component {
  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div>Form for New Class </div>
    )
  }
}

export default NewClass;