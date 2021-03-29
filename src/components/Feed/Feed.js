import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import PostView from "./Postcomponents/PostView";
import "../../Layout/Feed/Feed.css";
import FetchHelper from "../FetchHelper";

class Feed extends Component {

  state = {
    posts: [],
    fetching: true,
    singlePost: null
  };

  constructor(props) {
    super(props);
    console.log("!");
    this.state.fetching = true;
  }

  componentDidMount() {
    var helper = new FetchHelper();
    var postsPromise = helper.fetchFeedPosts();
    postsPromise.then((newPosts) => {
      console.log("Posts von FetchHelper");
      console.log(newPosts);
      this.setState({ posts: newPosts, fetching: false });
    });
  }

  componentDidUpdate() {
    console.log("!");
  }

  render() {
    if (this.state.posts.length != 0 && !this.state.fetching) {
      return (
        <div className="feedContainer">
          {this.state.posts.map((post) => (<PostView post={post}></PostView>))}
        </div>);
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Feed;
