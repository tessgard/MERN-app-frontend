import React from "react";
import "./Classes.css";
import axios from "axios";

class Classes extends React.Component {
  state = {
    data: [],
    popup: false
  };

  async componentDidMount() {
    const response = await axios(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class"
    );
    console.log(response);
    this.setState({
      data: response.data
    });
  }


   classPopup = (e) => {
      e.preventDefault();
      const name = e.target.innerText
      const selectedClass = this.state.data.find((item, index) => {
        return item.name === name
      })
      let popup = document.querySelector(".class-show-popup-hide")
      

      this.setState({
        popup: true,
        selectedClass: selectedClass
      })  
    };  

    removePopup = () => {
      this.setState({
        popup: false,
      })
    }

  render() {
    console.log(this.state.data);
    return (
      <div className="main-container">

      <div id="overlay" className={this.state.popup && "show" }></div>
      
        <div className="inner-main-container">
          <h1 className="bcmaPageHeaderH1">Classes</h1>

          <div className="class-grid-container">
            
              {this.state.data.map((item, index) => (
                <div className="classes-card">
                <div key={index}>
                  <a href="#" onClick={this.classPopup}><h3>{item.name}</h3></a>
                </div>
                </div>

              ))}
          </div>
          
          {
            this.state.popup &&
              <div className="class-show-popup">
                <div className="class-show-content-card">
                  <a href="#"><h2 onClick={this.removePopup}>x</h2></a>
                  <br></br>
                  <h2>{this.state.selectedClass.name}</h2>
                  <br></br>
                  <p>{this.state.selectedClass.description}</p>

                </div>
              </div>
          }
          
        </div>
      </div>
      
    );
  }
}

export default Classes;