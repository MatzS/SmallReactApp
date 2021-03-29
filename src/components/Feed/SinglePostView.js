import React, { Component } from 'react';
import FetchHelper from "../FetchHelper";
import "../../Layout/Feed/SinglePostView.css";
import PostView from "../Feed/Postcomponents/PostView";
import CommentView from "./Postcomponents/CommentView";

export default class SinglePostView extends Component {

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id;
        this.state.isTopicPost = props.match.params.isTopicPost;
        this.state.fetching = true;
    }

    state = {
        id: null,
        post: null,
        fetching: true,
        isTopicPost: null
    }

    render() {
        if (this.state.post && !this.state.fetching) {
            return (
                <div className="singlePostContainer">
                    <PostView post={this.state.post}></PostView>
                    <CommentView comments={this.state.post.comments}></CommentView>
                </div>
            )
        } else {
            return <div></div>
        }

    }

    componentDidMount = () => {
        if (this.state.id) {
            var helper = new FetchHelper();
            var promise = helper.fetchSinglePost(this.state.id, this.state.isTopicPost);
            promise.then((singlePost) => {
                this.setState({ post: singlePost, fetching: false });
                console.log("SinglePost fetch fertig!");
                console.log(singlePost);
            })
        } else {
            return;
        }
    }
}
