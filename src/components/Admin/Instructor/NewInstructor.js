import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class NewInstructor extends React.Component{
  state = {
    name: '',
    description: '',
    faculty: '',
    errors: []
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state)
    const newInstructor = {
      name: this.state.name,
      description: this.state.description,
      faculty: this.state.faculty
    }
    try {
      const response = await axios.post('https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor/new', newInstructor)
      console.log(response)
    } catch (error) {
      this.setState({
        errors: error.response
      })
      console.log(error.response)
    }
    this.props.history.push('/about/instructors')
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }
    
    return (
      <div style={{position: 'absolute', left: '200px', top: '200px'}}>
      <h1>New Instructor</h1>
      <form  onSubmit={this.onFormSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={this.state.name} placeholde="name" onChange={this.onInputChange}/>
        <label htmlFor="description"> Expertise:</label>
        <input type="text" name="description" value={this.state.description} onChange={this.onInputChange} />
        <label htmlFor="faculty">Faculty: </label>
        <input type="text" name="faculty" value={this.state.faculty} onChange={this.onInputChange} />
        <button onClick={this.onFormSubmit}>Submit</button>
        <Link to="/about/instructors"><button>Back</button></Link>
      </form>
      </div>
    )
  }
}

export default withRouter(NewInstructor);