import React from "react";
import "./App.css";
import Routes from "./Routes";
import axios from "axios";

class App extends React.Component {
  state = { authentication: false, errors: [], currentUser: null, selectedContent: null };

  login = async userCredentials => {
    console.log(userCredentials);

    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/auth",
        userCredentials
      );
      console.log(response);
      const token = response.data.token;
      console.log(token);
      localStorage.setItem("token", token);
      this.setState({ authentication: true });
      console.log(this.state);
    } catch (error) {
      this.setState({
        authentication: false,
        errors: error.response.data.errors
      });
      console.log(error.response.data.errors);
    }
  };

  logout = () => {
    console.log("clicked");
    localStorage.removeItem("token");
    this.setState({ authentication: false });
  };

  componentDidMount = async () => {
    try {
      const token = localStorage.getItem("token");
      const authenticated = await axios.get(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/auth",
        {
          headers: { "auth-x-token": token }
        }
      );
      console.log(authenticated);
      console.log("authenticated");

      this.setState({
        authentication: true,
        currentUser: authenticated.data
      });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  onContentSelect = (content) => {
    this.setState({ selectedContent: content })
    console.log(this.state)
  }

  render() {
    const { login, logout, onContentSelect } = this;
    const { authentication, selectedContent } = this.state;
    console.log(this.state)
    return (
      <Routes authentication={authentication} login={login} logout={logout} selectedContent={selectedContent} onContentSelect={onContentSelect}/>
    );
  }
}

export default App;
