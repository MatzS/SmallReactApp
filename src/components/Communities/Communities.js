import React, { Component } from "react";
import firebase from "firebase";
import FetchHelper from "../FetchHelper";
import CommunityView from "./CommunityView";
import "../../Layout/Communities/Communities.css";

class Communities extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    communities: null,
    fetching: true
  }

  render() {
    if (this.state.communities && !this.state.fetching) {
      return (
        <div className="communitiesContainer">
          {this.state.communities.map((comm) => (<CommunityView community={comm}></CommunityView>))}
        </div>

      )
    }
    return (
      <div></div>
    );
  }

  componentDidMount = () => {
    var helper = new FetchHelper();
    var promise = helper.fetchCommunities();
    promise.then((comms) => {
      this.setState({ communities: comms, fetching: false });
    });
  }

}

export default Communities;
