import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
  const { authentication, logout } = props;

  if (authentication) {
    return (
      <div className="nav-bar">
        <div className="company-logo" />
        <div className="nav-bar-right-box">
          <div className="nav-bar-link-box">
            <a className="nav-bar-links" href="https://bcma.netlify.com/">
              Home
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/about/our-story"
            >
              About Us
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/classes"
            >
              Classes
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/about/gallery"
            >
              Gallery
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/whats-on/events"
            >
              What's On
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              href="https://www.facebook.com/ballaratcentreofmusicandthearts/"
              target="none"
            >
              <svg
                className="nav-bar-links"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="23.5"
                  stroke="black"
                  stroke-width="3"
                />

                <path
                  d="M31.0131 18.9091H27.3714V17.8402C27.3714 16.7464 27.8189 16.0753 29.2358 16.0753C29.8075 16.0753 30.5036 16.1996 30.951 16.3363L31.9205 11.8867C31.1996 11.6879 29.5465 11.3523 27.8686 11.3523C23.9783 11.3523 21.3061 13.5149 21.3061 17.9396V18.9091H18.7333V23.3835H21.3061V38H27.3714V23.3835H31.0131V18.9091Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
        <a href="#" className="log-out-button" onClick={logout}>
          Logout
        </a>
      </div>
    );
  } else {
    return (
      <div className="nav-bar">
        <a href="https://bcma.netlify.com/" className="company-logo" />
        <div className="nav-bar-right-box">
          <div className="nav-bar-link-box">
            <a className="nav-bar-links" href="https://bcma.netlify.com/">
              Home
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/about/our-story"
            >
              About Us
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/classes"
            >
              Classes
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/about/gallery"
            >
              Gallery
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              className="nav-bar-links"
              href="https://bcma.netlify.com/whats-on/events"
            >
              What's On
            </a>
          </div>
          <div className="nav-bar-link-box">
            <a
              href="https://www.facebook.com/ballaratcentreofmusicandthearts/"
              target="none"
            >
              <svg
                className="nav-bar-links"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="25"
                  cy="25"
                  r="23.5"
                  stroke="black"
                  stroke-width="3"
                />
                <path
                  d="M31.0131 18.9091H27.3714V17.8402C27.3714 16.7464 27.8189 16.0753 29.2358 16.0753C29.8075 16.0753 30.5036 16.1996 30.951 16.3363L31.9205 11.8867C31.1996 11.6879 29.5465 11.3523 27.8686 11.3523C23.9783 11.3523 21.3061 13.5149 21.3061 17.9396V18.9091H18.7333V23.3835H21.3061V38H27.3714V23.3835H31.0131V18.9091Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
