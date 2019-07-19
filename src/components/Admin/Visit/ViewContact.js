import React from "react";
import { Redirect, Link, withRouter } from "react-router-dom";
import axios from "axios";
// import "./NewClass.css";

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
          {this.state.data.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.email}</p>
              </div>
            );
          })}
        </div>
      );
    }
  }
}

export default withRouter(ViewContact);
