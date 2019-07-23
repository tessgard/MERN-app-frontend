import React from 'react';
import { Redirect, withRouter, Link } from 'react-router-dom';
import axios from 'axios';

class UpdateFaq extends React.Component {
  state = {
    data: null,
    selectedContent: null,
    question: this.props.selectedContent.description || '',
    answer: this.props.selectedContent.answer || '',
    id: this.props.selectedContent._id,
    errors: []
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state)
  }

  onFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/faq/${this.state.id}`, 
        {
          question: this.state.question,
          answer: this.state.answer
        }
      );

    } catch (error) {
      this.setState({
        errors: error.response
      });
    }
    this.props.history.push('/faqs')
  }

  render() {
    const { authentication } = this.props

    if (!authentication) {
      return <Redirect to="/admin/login" />
    }

    return (
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>Update FAQ</h1>
        </div>
        <div className="new-class-form-container">
          <form  onSubmit={this.onFormSubmit} className="new-class-form">

            <label htmlFor="question"> Question:</label>
            <textarea rows="10" cols="50" value={this.state.question} onChange={this.onInputChange} name="question" id="description"/>
            <label htmlFor="answer"> Answer:</label>
            <textarea rows="10" cols="50" value={this.state.answer} onChange={this.onInputChange} name="answer" id="description"/>

            <div className="classes-buttons">
              <button onClick={this.onFormSubmit}>Submit</button>
              <Link to="/faqs"><button>Back</button></Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(UpdateFaq);