import React, { Component } from 'react';
import PostView from "../Feed/Postcomponents/PostView";

class CommunityFeed extends Component {

    constructor(props) {
        super(props);
        this.state.community = props.community;
    }

    state = {
        community: null
    }

    render() {
        if (this.state.community) {
            return (
                <div className="communityFeedContainer">
                    {this.state.community.posts.map((postObj) => (<PostView post={postObj} ></PostView>))}
                </div>
            );
        } else {
            return (<div></div>)
        }
    }
}

export default CommunityFeed;
