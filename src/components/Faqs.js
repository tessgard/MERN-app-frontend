import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Faqs extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.getFaqs();
    this.props.handleLoading();
  }

  getFaqs = async () => {
    const response = await axios.get(
      "https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/faq"
    );
    this.setState({
      data: response.data
    });
  };

  deleteFaq = async item => {
    try {
      const response = await axios.delete(
        `https://deployment-mern-backend-tessivanjayz.gardtess.now.sh/faq/${
          item._id
        }`
      );
      this.getFaqs();
    } catch (error) {
      this.setState({ errors: error.response });
    }
  };

  render() {
    const { onContentSelect, authentication } = this.props;
    if (authentication) {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>FAQs</h1>
            </div>
            <Link to="/admin/faq/new">
              <Button id="new-about-button" variant="outline-dark">
                Add New FAQ
              </Button>
            </Link>
            {this.state.data.map((item, index) => (
              <div className="about-description-container" key={index}>
                <div className="about-description" />
                <div className="about-button-container">
                  {this.state.data.map((item, index) => (
                    <div
                      className="about-description-container"
                      id="about-description-container"
                      key={index}
                    >
                      <div className="about-description">
                        <p>question:</p>
                        <p>{item.question}</p>
                        <p>answer:</p>
                        <p>{item.answer}</p>
                        <Link
                          to="/admin/faq/update"
                          onClick={() => onContentSelect(item)}
                        >
                          <button className="class-update-button">
                            Update
                          </button>
                        </Link>
                        <button
                          className="class-delete-button"
                          onClick={() => this.deleteFaq(item)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="main-container">
          <div className="inner-main-container">
            <div className="new-class-header" id="about-header">
              <h1>FAQs</h1>
            </div>
            {this.state.data.map((item, index) => (
              <div
                className="about-description-container"
                id="about-description-container"
                key={index}
              >
                <div className="about-description">
                  <p>question:</p>
                  <p>{item.question}</p>
                  <p>answer:</p>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Faqs;
