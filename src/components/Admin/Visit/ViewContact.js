import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./ViewContact.css";

class ViewContact extends React.Component {
  state = {
    data: [],
    error: []
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/contact"
      );
      console.log(response);
      this.setState({
        data: response.data
      });
      this.props.handleLoading();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    const { authentication } = this.props;

    if (!authentication) {
      return <Redirect to="/admin/login" />;
    } else {
      return (
        <div className="main-container" id="new-class-main-container">
          <div className="new-class-header">
            <h1>Contact List</h1>
          </div>
          <div className="contact-list-container">
            {this.state.data.map((item, index) => {
              return (
                <div className="contact-item-container" key={index}>
                  <p className="contact-show">
                    Email: <br /> {item.email}
                  </p>
                  <br />
                  <p className="contact-show">
                    Description:
                    <br /> {item.description}
                  </p>
                  <br />
                  <p className="contact-show">
                    Date Created: <br />
                    {item.createdAt.split("T")[0]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default withRouter(ViewContact);
