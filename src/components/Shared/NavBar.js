import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = props => {
  const { authentication, logout } = props;

  if (authentication) {
    return (
      <div className="navBar">
        <div className="companyLogo" />
        <div className="navBarRightBox">
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="http://localhost:3000/visit/address"
            >
              Home
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="http://localhost:3000/visit/address"
            >
              About Us
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="http://localhost:3000/visit/address"
            >
              Classes
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="http://localhost:3000/visit/address"
            >
              Gallery
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="http://localhost:3000/visit/address"
            >
              What's On
            </a>
          </div>
          <div className="navBarLinkBox">
            <svg
              className="navBarLinks"
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
          </div>
        </div>
        <button onClick={logout}>Logout</button>
        <Link to="/admin/about/update">Update About</Link>
        <Link to="/admin/class/new">New Class</Link>
        <Link to="/admin/class/update">Update Class</Link>
        <Link to="/admin/event/new">New Event</Link>
        <Link to="/admin/event/update">Update Event</Link>
        <Link to="/admin/instructor/new">New Instructor</Link>
        <Link to="/admin/instructor/update">Update Instructor</Link>
        <Link to="/admin/venue/new">New Venue</Link>
        <Link to="/admin/venue/update">Update Venue</Link>
      </div>
    );
  } else {
    return (
      <div className="navBar">
        <a href="http://localhost:3000/" className="companyLogo" />
        <div className="navBarRightBox">
          <div className="navBarLinkBox">
            <a className="navBarLinks" href="http://localhost:3000/">
              Home
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="https://optimistic-dubinsky-7bde69.netlify.com/about/our-story"
              // href="http://localhost:3000/about/our-story"
            >
              About Us
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="https://optimistic-dubinsky-7bde69.netlify.com/classes/dance"
              // href="http://localhost:3000/classes/dance"
            >
              Classes
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="https://optimistic-dubinsky-7bde69.netlify.com/about/gallery"
              // href="http://localhost:3000/about/gallery"
            >
              Gallery
            </a>
          </div>
          <div className="navBarLinkBox">
            <a
              className="navBarLinks"
              href="https://optimistic-dubinsky-7bde69.netlify.com/whats-on/events"
              // href="http://localhost:3000/whats-on/events"
            >
              What's On
            </a>
          </div>
          <div className="navBarLinkBox">
            <svg
              className="navBarLinks"
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
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
