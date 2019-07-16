import React from "react";
import "./Classes.css";
import axios from "axios";
import { Link, withRouter } from 'react-router-dom';

class Classes extends React.Component {
  state = {
    data: [],
    popup: false,
    errors: []
  };

  async componentDidMount() {
    this.getClasses()
  }

  getClasses = async () => {
    try {
      const response = await axios(
        "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class"
      );
      console.log(response);
      this.setState({
        data: response.data
      });
    } catch (error) {
      this.setState({ errors: error.response })
    }
  }

  deleteClass = async (item) => {
    try {
      const response = await axios.delete(`https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/class/${item._id}`)
      console.log(response)
      this.getClasses()
    } catch (error) {
      this.setState({ errors: error.response})
    }
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
    const { onContentSelect, authentication } = this.props
    console.log(this.state.data);
    if (authentication) {
      return (
        <div className="main-container">
  
        <div id="overlay" className={this.state.popup && "show" }></div>
        
          <div className="inner-main-container">
            <h1 className="bcmaPageHeaderH1">Classes</h1>
            <Link to='/admin/class/new'><button>Add New Class</button></Link>
            <div className="class-grid-container">
                {this.state.data.map((item, index) => (
                  <div className="classes-card" style={{ backgroundImage: "url(" + item.image + ")"}}>
                  <div key={index}>
                    <a href="#" onClick={this.classPopup}><h3>{item.name}</h3></a>
                    <Link to='/admin/class/update' onClick={() => onContentSelect(item)}><button>Update Details</button></Link>
                    <button onClick={() => this.deleteClass(item)}>Delete Class</button>
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
    } else {
    return (
      <div className="main-container">

      <div id="overlay" className={this.state.popup && "show" }></div>
      
        <div className="inner-main-container">
          <h1 className="bcmaPageHeaderH1">Classes</h1>

          <div className="class-grid-container">
            
              {this.state.data.map((item, index) => (
                <div className="classes-card" style={{ backgroundImage: "url(" + item.image + ")"}}>
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
}

export default withRouter(Classes);