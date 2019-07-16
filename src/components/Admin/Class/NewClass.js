import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import axios from 'axios';


class NewClass extends React.Component {
  state = {
    name: '',
    description: '',
    category: '',
    image: '',
    errors: []
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state)
    const newClass = {
      name: this.state.name,
      description: this.state.description,
      category: this.state.category,
      image: this.state.image
    }
    try {
      const response = await axios.post('https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class/new', newClass)
      console.log(response)
    } catch (error) {
      this.setState({
        errors: error.response
      })
      console.log(error.response)
    }
    this.props.history.push('/classes')
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div style={{position: 'absolute', left: '200px', top: '200px'}}>
      <h1>Update Class</h1>
      <form  onSubmit={this.onFormSubmit} style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={this.state.name} placeholde="name" onChange={this.onInputChange}/>
        <label htmlFor="description"> Description:</label>
        <textarea rows="10" cols="50" name="description" value={this.state.description} onChange={this.onInputChange} />
        <label htmlFor="faculty">Category: </label>
        <input type="text" name="category" value={this.state.category} onChange={this.onInputChange} />
        <label htmlFor="faculty">Image: </label>
        <input type="text" name="image" value={this.state.image} onChange={this.onInputChange} />
        <button onClick={this.onFormSubmit}>Submit</button>
        <Link to="/classes"><button>Back</button></Link>
      </form>
    </div>
    )
  }
}

export default withRouter(NewClass);