import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    email: "",
    errors: []
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onFormSubmit = async event => {
    event.preventDefault();
    console.log(this.state);
    const newContact = {
      email: this.state.email
    };
    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/contact/new",
        newContact
      );
      console.log(response);
    } catch (error) {
      this.setState({
        errors: error.response
      });
      console.log(error.response);
    }
    this.props.history.push("/visit/contact");
  };

  render() {
    return (
      <div
        className="main-container"
        id="maincontainerish"
        style={{ position: "absolute", left: "200px", top: "200px" }}
      >
        <h1 className="bcmaPageHeaderH1" id="headerish">
          Update Class
        </h1>
        <div className="contact-grid-container">
          <form
            onSubmit={this.onFormSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Enter Email"
              onChange={this.onInputChange}
            />

            <button onClick={this.onFormSubmit}>Submit</button>
            <Link to="/classes">
              <button>Back</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Contact);

// class NewClass extends React.Component {
//   state = {
//     name: '',
//     description: '',
//     category: '',
//     image: '',
//     errors: []
//   }

//   render() {
//     const { authentication } = this.props

//     if (!authentication) {
//       return <Redirect to="/admin/login" />
//     }

//     return (
//       <div style={{position: 'absolute', left: '200px', top: '200px'}}>
//       <h1>Update Class</h1>
//       <form  onSubmit={this.onFormSubmit} style={{display: 'flex', flexDirection: 'column'}}>
//         <label htmlFor="name">Name: </label>
//         <input type="text" name="name" value={this.state.name} placeholde="name" onChange={this.onInputChange}/>
//         <label htmlFor="description"> Description:</label>
//         <textarea rows="10" cols="50" name="description" value={this.state.description} onChange={this.onInputChange} />
//         <label htmlFor="faculty">Category: </label>
//         <input type="text" name="category" value={this.state.category} onChange={this.onInputChange} />
//         <label htmlFor="faculty">Image: </label>
//         <input type="text" name="image" value={this.state.image} onChange={this.onInputChange} />
//         <button onClick={this.onFormSubmit}>Submit</button>
//         <Link to="/classes"><button>Back</button></Link>
//       </form>
//     </div>
//     )
//   }
// }

// export default withRouter(NewClass);
