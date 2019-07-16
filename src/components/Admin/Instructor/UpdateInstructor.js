import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateInstructor extends React.Component{
  
  state = {
    data: null,
    selectedContent: null,
    name: this.props.selectedContent.name || '',
    description: this.props.selectedContent.description || '',
    faculty: this.props.selectedContent.faculty || '',
    id: this.props.selectedContent._id,
    errors: []
  }

  componentDidMount() {
    console.log('instructor update component did mount')
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(this.state.description)
      const response = await axios.put(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/instructor/${this.state.id}`
                  ,{name: this.state.name,
                  description: this.state.description,
                  faculty: this.state.faculty});

      console.log(response)
      console.log(response.config)
    } catch (error) {
      this.setState({
        errors: error.response
      })
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
      <h1>Update Instructor</h1>
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

export default withRouter(UpdateInstructor);