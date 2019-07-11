import React from "react";
import "./Instructors.css";

const Instructors = () => {
  return (
    <div className="instructorMainContainer">
      <div className="bcmaDescription">
        Instructors
        <h5>music,</h5>
        <h5>dance &</h5>
        <h5>drama</h5>
      </div>
      <div className="instructorBottomContainer">
        <div className="instructorInnerContainer">
          <h1 className="instructorHeader">Our Tutors</h1>
          <div className="instructorProfilesContainer">
            <div className="instructorProfileCard">
              <div className="instructorImage" />
              <div className="instructorDetails">
                <h1>Name</h1>
                <h2>Expertise</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
