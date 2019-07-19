import React from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import axios from "axios";

class UpdateClass extends React.Component {
  state = {
    data: null,
    selectedContent: null,
    name: this.props.selectedContent.name || "",
    description: this.props.selectedContent.description || "",
    category: this.props.selectedContent.category || "",
    image: this.props.selectedContent.image || "",
    id: this.props.selectedContent._id,
    errors: []
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onFormSubmit = async event => {
    event.preventDefault();
    try {
      console.log(this.state);
      const response = await axios.put(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class/${
          this.state.id
        }`,
        {
          name: this.state.name,
          description: this.state.description,
          category: this.state.category,
          image: this.state.image
        }
      );
      console.log(response);
    } catch (error) {
      this.setState({ errors: error.response });
    }
    this.props.history.push("/classes");
  };

  render() {
    const { authentication } = this.props;

    if (!authentication) {
      return <Redirect to="/admin/login" />;
    }

    return (
      <div className="main-container" id="new-class-main-container">
        <div className="new-class-header">
          <h1>Update Class</h1>
        </div>
        <div className="new-class-form-container">
          <form
            className="new-class-form"
            onSubmit={this.onFormSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label id="first-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Name"
              onChange={this.onInputChange}
            />
            <label htmlFor="description"> Description:</label>
            <textarea
              rows="10"
              cols="50"
              name="description"
              placeholder="Enter Description"
              value={this.state.description}
              onChange={this.onInputChange}
            />
            <label htmlFor="faculty">Category: </label>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.onInputChange}
            />
            <label htmlFor="faculty">Image: </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
              onChange={this.onInputChange}
            />
            <div className="classes-buttons">
              <button onClick={this.onFormSubmit}>Submit</button>
              <Link to="/classes">
                <button>Back</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UpdateClass);
