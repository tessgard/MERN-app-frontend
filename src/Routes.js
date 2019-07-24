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
import Contact from "./components/Visit/Contact";
import Login from "./components/Admin/Login";
import UpdateAbout from "./components/Admin/About/UpdateAbout";
import ViewContact from "./components/Admin/Visit/ViewContact";
import UpdateClass from "./components/Admin/Class/UpdateClass";
import NewClass from "./components/Admin/Class/NewClass";
import UpdateEvent from "./components/Admin/Event/UpdateEvent";
import NewEvent from "./components/Admin/Event/NewEvent";
import UpdateVenue from "./components/Admin/Venue/UpdateVenue";
import NewVenue from "./components/Admin/Venue/NewVenue";
import UpdateInstructor from "./components/Admin/Instructor/UpdateInstructor";
import NewInstructor from "./components/Admin/Instructor/NewInstructor";
import NewAbout from "./components/Admin/About/NewAbout";
import UpdateHomePhotos from "./components/Admin/Home/UpdateHomePhotos";
import Faqs from "./components/Faqs";
import NewFaq from "./components/Admin/Faq/NewFaq";
import UpdateFaq from "./components/Admin/Faq/UpdateFaq";
import Loader from "./components/Shared/Loader";
import NotFound from "./components/Shared/NotFound";
import NavBar from "./components/Shared/NavBar";

class Routes extends React.Component {
  state = {
    isLoading: true
  };

  handleLoading = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const {
      authentication,
      login,
      logout,
      selectedContent,
      onContentSelect,
      errors,
      failed
    } = this.props;

    return (
      <div className="app-outer-container">
        <NavBar authentication={authentication} logout={logout} />
        {this.state.isLoading && <Loader />}

        <Switch>
          <Route
            exact
            path="/"
            render={history => {
              return (
                <Home
                  handleLoading={this.handleLoading}
                  authentication={authentication}
                  history={history}
                  onContentSelect={onContentSelect}
                />
              );
            }}
          />
          <Route
            exact
            path="/whats-on/current-productions"
            component={CurrentProductions}
          />
          <Route
            exact
            path="/whats-on/events"
            render={history => {
              return (
                <Events
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/about/our-story"
            render={history => {
              return (
                <OurStory
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/about/gallery"
            render={history => {
              return (
                <ImageGallery
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/faqs"
            render={history => {
              return (
                <Faqs
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                />
              );
            }}
          />
          <Route
            exact
            path="/about/instructors"
            render={history => {
              return (
                <Instructors
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                  handleLoading={this.handleLoading}
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
                  handleLoading={this.handleLoading}
                  onContentSelect={onContentSelect}
                  history={history}
                  authentication={authentication}
                />
              );
            }}
          />
          <Route
            exact
            path="/visit/contact"
            render={history => {
              return (
                <Contact
                  authentication={authentication}
                  history={history}
                  login={login}
                  handleLoading={this.handleLoading}
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
                  handleLoading={this.handleLoading}
                  errors={errors}
                  failed={failed}
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
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/faq/update"
            render={history => {
              return (
                <UpdateFaq
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/about/new"
            render={history => {
              return (
                <NewAbout
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/faq/new"
            render={history => {
              return (
                <NewFaq
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/visit/contact"
            render={history => {
              return (
                <ViewContact
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                  handleLoading={this.handleLoading}
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
                  handleLoading={this.handleLoading}
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
                  handleLoading={this.handleLoading}
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
                  selectedContent={selectedContent}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/event/new"
            render={history => {
              return (
                <NewEvent
                  authentication={authentication}
                  history={history}
                  handleLoading={this.handleLoading}
                />
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
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/venue/new"
            render={history => {
              return (
                <NewVenue
                  authentication={authentication}
                  history={history}
                  handleLoading={this.handleLoading}
                />
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
                  handleLoading={this.handleLoading}
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
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/home/update-photos"
            render={history => {
              return (
                <UpdateHomePhotos
                  authentication={authentication}
                  history={history}
                  selectedContent={selectedContent}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />

          <Route
            render={history => {
              return (
                <NotFound
                  history={history}
                  handleLoading={this.handleLoading}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Routes;
