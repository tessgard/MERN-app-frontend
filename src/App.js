import React from "react";
import "./App.css";
import Routes from "./Routes";
import axios from "axios";

class App extends React.Component {
  state = {
    authentication: false,
    errors: [],
    currentUser: null,
    selectedContent: null
  };

  login = async userCredentials => {
    try {
      const response = await axios.post(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/auth",
        userCredentials
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setState({ authentication: true });
    } catch (error) {
      this.setState({
        authentication: false,
        errors: error.response.data.errors
      });
    }
  };

  logout = () => {
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

      this.setState({
        authentication: true,
        currentUser: authenticated.data
      });
    } catch (error) {}
  };

  onContentSelect = content => {
    this.setState({ selectedContent: content });
  };

  render() {
    const { login, logout, onContentSelect } = this;
    const { authentication, selectedContent } = this.state;
    return (
      <Routes
        authentication={authentication}
        login={login}
        logout={logout}
        selectedContent={selectedContent}
        onContentSelect={onContentSelect}
      />
    );
  }
}

export default App;
