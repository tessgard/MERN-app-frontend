import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateHomePhotos extends React.Component {
  state = {
    data: [],
    image: this.props.selectedContent.image || '',
    id: this.props.selectedContent._id,
    errors: []
  }

  // async componentDidMount() {
  //   const response = await axios.get(
  //     'https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/carousel-images'
  //   );
  //   console.log(this.props.history)

  //   this.setState({
  //     data: response.data
  //   });
  // }
  componentDidMount() {
    console.log('Update Home Photos did mount')
    console.log(this.props)
  }

  onInputChange = event => {
    this.setState({ image: event.target.value });
    console.log(this.state);
  };

  onFormSubmit = async event => {
    event.preventDefault();
    console.log(this.state)
    console.log(this.props)
    try {
      const response = await axios.put(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/carousel-images/${this.state.id}`, { image: this.state.image} )
      console.log(response)
    } catch (error) {
      console.log(error)
      this.setState({
        errors: error.response
      })
    }
    this.props.history.push('/');
  }

  render() {
    const { authentication } = this.props;

    if (!authentication) {
      return <Redirect to="/admin/login" />;
    }
    console.log(this.state)
    console.log(this.props)
    return(
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>Update Carousel Image</h1>
        </div>
        <div className="new-class-form-container">
          <form  onSubmit={this.onFormSubmit} className="new-class-form">
            <label htmlFor="description"> Image Url:</label>
            <input type="text" value={this.state.image} onChange={this.onInputChange} name="image" id="image"/>
            <div className="classes-buttons">
              <button onClick={this.onFormSubmit}>Submit</button>
              <Link to="/"><button>Back</button></Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateHomePhotos);