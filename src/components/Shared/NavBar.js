import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';


const NavBar = (props) => {
  const { authentication, logout } = props

  if (authentication) {
 
    return (
      <div className="NavBar">
        
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
    return(
      <div className="NavBar">
      

    
    </div>

    )
  }
};

export default NavBar;
