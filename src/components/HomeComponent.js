import React, { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AboutMePage from "./AboutMePage";
import PhotoGalleryPage from "./PhotoGalleryPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomeComponent = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AboutMe" component={AboutMePage} />
          <Route exact path="/PhotoGallery" component={PhotoGalleryPage} />
        </Switch>
        <Footer />
      </Fragment>
    </Router>
  );
};
export default HomeComponent;
