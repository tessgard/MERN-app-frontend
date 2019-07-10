import React from 'react';
import './App.css';




class App extends React.Component {
  async componentDidMount() {
    console.log("cdm")
    const response = await fetch(`${process.env.REACT_APP_API_URL}/about`)
    console.log(response)
    const data = await response.json()
    console.log(data)
  }


  render() {
    return (
      <>
      <h1>BCMA</h1>
      <h3>Dance | Music | Theatre</h3>
      </>
    )
  }
}

export default App;
