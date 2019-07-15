import React from "react";
import "./Classes.css";
import axios from "axios";

class Classes extends React.Component {
  state = {
    data: []
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
      let popup = document.querySelector(".class-show-popup-hide")
      popup.classList.remove("class-show-popup-hide");
      popup.classList.add("class-show-popup")  
    };  
  
   

  
  
  render() {
    console.log(this.state.data);
    return (
      <div className="main-container">
        <div className="inner-main-container">
          <h1 className="bcmaPageHeaderH1">Classes</h1>

          <div className="class-grid-container">
            
              {this.state.data.map((item, index) => (
                <div className="classes-card">
                <div  key={index}>
                  <a href="#" onClick={this.classPopup}><h3>{item.category}</h3></a>
                </div>
                </div>

              ))}
          </div>

          <div className="class-show-popup-hide">
              
                <div className="class-show-content-card">
                  
                </div>

              

          </div>
          
        </div>
      </div>
      
    );
  }
}

export default Classes;