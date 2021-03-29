import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import BottomNavbarTest from "./components/BottomNavbarTest";
import Header from "./components/Header";
import Loginform from "./components/Loginform";
import SignUpForm from "./components/SignUpForm";
import Feed from "./components/Feed/Feed";
import CreatePost from "./components/CreatePost/CreatePost";
import Communities from "./components/Communities/Communities";
import SinglePostView from "./components/Feed/SinglePostView";
import SingleCommunityView from "./components/Communities/SingleCommunityView";


class App extends Component {
  state = {

  };

  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div className="contentContainer">
          <Route
            path={"/feed"}
            component={Feed}
          />
          <Route
            path={"/facts"}
            component={Communities}
          />
          <Route
            path={"/login"}
            component={Loginform}
          />
          <Route
            path={"/signUp"}
            component={SignUpForm}
          />
          <Route
            path="/post/:id/:isTopicPost"
            component={SinglePostView}
          />
          <Route
            path="/community/:id"
            component={SingleCommunityView}
          ></Route>
        </div>
        <div className="container mx-auto p-0 col-12 fixed-bottom" id="c4">
          <BottomNavbarTest></BottomNavbarTest>
        </div>
      </Router>
    );
  }
}

export default App;
