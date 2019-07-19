import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import CurrentProductions from "./components/WhatsOn/CurrentProductions";
import Events from "./components/WhatsOn/Events";
import OurStory from "./components/About/OurStory";
import ImageGallery from "./components/About/ImageGallery";
import Instructors from "./components/About/Instructors";
import Classes from "./components/Classes/Classes";
import Dance from "./components/Classes/Dance"; //no
import MusicalTheatre from "./components/Classes/MusicalTheatre"; //no
import Acting from "./components/Classes/Acting"; //no
import PreSchool from "./components/Classes/PreSchool"; //no
import Address from "./components/Visit/Address"; //put together with contact
import VisitorInfo from "./components/Visit/VisitorInfo";
import Contact from "./components/Visit/Contact"; //do this jy
import Login from "./components/Admin/Login";
import UpdateAbout from "./components/Admin/About/UpdateAbout";
import UpdateClass from "./components/Admin/Class/UpdateClass";
import NewClass from "./components/Admin/Class/NewClass";
import UpdateEvent from "./components/Admin/Event/UpdateEvent";
import NewEvent from "./components/Admin/Event/NewEvent";
import UpdateVenue from "./components/Admin/Venue/UpdateVenue";
import NewVenue from "./components/Admin/Venue/NewVenue";
import UpdateInstructor from "./components/Admin/Instructor/UpdateInstructor";
import NewInstructor from "./components/Admin/Instructor/NewInstructor";
import NavBar from "./components/Shared/NavBar";

class Routes extends React.Component {
  render() {
    const {
      authentication,
      login,
      logout,
      selectedContent,
      onContentSelect
    } = this.props;
    return (
      <Switch>
        <div className="appOuterContainer">
          <NavBar authentication={authentication} logout={logout} />
          <Route
            exact
            path="/"
            render={history => {
              return <Home authentication={authentication} history={history} />;
            }}
          />
          <Route
            exact
            path="/whats-on/current-productions"
            component={CurrentProductions}
          />
          <Route exact path="/whats-on/events" component={Events} />
          <Route
            exact
            path="/about/our-story"
            render={history => {
              return (
                <OurStory
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                />
              );
            }}
          />
          <Route exact path="/about/gallery" component={ImageGallery} />

          <Route
            exact
            path="/about/instructors"
            render={history => {
              return (
                <Instructors
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                />
              );
            }}
          />
          <Route
            exact
            path="/classes"
            render={history => {
              return (
                <Classes
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                />
              );
            }}
          />
          <Route exact path="/classes/dance" component={Dance} />
          <Route
            exact
            path="/classes/musical-theatre"
            component={MusicalTheatre}
          />
          <Route exact path="/classes/acting" component={Acting} />
          <Route exact path="/classes/preschool" component={PreSchool} />
          <Route exact path="/visit/address" component={Address} />
          <Route exact path="/visit/info" component={VisitorInfo} />
          {/* <Route exact path="/visit/contact" component={Contact} /> */}
          <Route
            exact
            path="/visit/contact"
            render={history => {
              return (
                <Contact
                  authentication={authentication}
                  history={history}
                  login={login}
                />
              );
            }}
          />

          <Route
            exact
            path="/admin/login"
            render={history => {
              return (
                <Login
                  authentication={authentication}
                  history={history}
                  login={login}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/about/update"
            render={history => {
              return (
                <UpdateAbout
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/class/update"
            render={history => {
              return (
                <UpdateClass
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/class/new"
            render={history => {
              return (
                <NewClass
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/event/update"
            render={history => {
              return (
                <UpdateEvent
                  authentication={authentication}
                  history={history}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/event/new"
            render={history => {
              return (
                <NewEvent authentication={authentication} history={history} />
              );
            }}
          />
          <Route
            exact
            path="/admin/venue/update"
            render={history => {
              return (
                <UpdateVenue
                  authentication={authentication}
                  history={history}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/venue/new"
            render={history => {
              return (
                <NewVenue authentication={authentication} history={history} />
              );
            }}
          />
          <Route
            exact
            path="/admin/instructor/update"
            render={history => {
              return (
                <UpdateInstructor
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/instructor/new"
            render={history => {
              return (
                <NewInstructor
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
        </div>
      </Switch>
    );
  }
}

export default Routes;
