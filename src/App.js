import React from "react";
import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/Shared/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="appOuterContainer">
        <NavBar />
        <Routes />
      </div>
    );
  }
}

export default App;
