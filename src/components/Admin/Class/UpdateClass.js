import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateClass extends React.Component {
  state = {
    data: null,
    selectedContent: null,
    name: this.props.selectedContent.name || '',
    description: this.props.selectedContent.description || '',
    category: this.props.selectedContent.category || '',
    image: this.props.selectedContent.image || '',
    id: this.props.selectedContent._id,
    errors: []
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault()
    try {
      console.log(this.state)
      const response = await axios.put(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class/${this.state.id}`
                    ,{ name: this.state.name,
                      description: this.state.description,
                      category: this.state.category,
                      image: this.state.image,})
      console.log(response)
    } catch (error) {
      this.setState({ errors: error.response })
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

export default withRouter(UpdateClass);