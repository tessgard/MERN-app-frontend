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
      // popup.classList.remove("class-show-popup-hide");
      // popup.classList.add("class-show-popup")
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
  
    // classPopupById = (e) => {
    //   e.preventDefault();
    //   this.state.data.find((item, index) => (
    //     key=index
    //     if (item.id === "id from item in link clicked")  {
    //       item.description

    //     }
    //   ))
    // };

  
  
  render() {
    console.log(this.state.data);
    return (
      <div className="main-container">
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
                  <p onClick={this.removePopup}>x</p>
                  <p>{this.state.selectedClass.name}</p>
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