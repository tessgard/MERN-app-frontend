import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";

const NavBar = props => {
  const { authentication, logout } = props;

  if (authentication) {
    return (
      <div className="nav-bar">
        <Link to="/" className="company-logo" />
        <div className="nav-bar-right-box">
          <Navbar id="nav-background" bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about/our-story">
                    About us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/instructors">
                    Faculty
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/classes">Classes</Nav.Link>
                <Nav.Link href="/about/gallery">Gallery</Nav.Link>
                <Nav.Link href="/whats-on/events">What's on</Nav.Link>
                <Nav.Link href="/visit/contact">Contact us</Nav.Link>

                <Nav.Link
                  href="https://www.facebook.com/ballaratcentreofmusicandthearts/"
                  target="none"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
                <Nav.Link className="logout-link" href="#" onClick={logout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav-bar">
        <Link to="/" className="company-logo" />
        <div className="nav-bar-right-box">
          <Navbar id="nav-background" bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about/our-story">
                    About us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/about/instructors">
                    Faculty
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#">FAQs</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/classes">Classes</Nav.Link>
                <Nav.Link href="/about/gallery">Gallery</Nav.Link>
                <Nav.Link href="/whats-on/events">What's on</Nav.Link>
                <Nav.Link href="/visit/contact">Contact us</Nav.Link>

                <Nav.Link
                  href="https://www.facebook.com/ballaratcentreofmusicandthearts/"
                  target="none"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
};

export default NavBar;
