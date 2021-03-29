import React, { Component } from 'react';
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import PicturePostBody from "./PicturePostBody";
import LinkPostBody from "./LinkPostBody";
import ThoughtPostBody from "./ThoughtPostBody";
import GIFPostBody from "./GIFPostBody";
import MultiPicturePostBody from "./MultiPicturePostBody";
import YouTubePostBody from "./YouTubePostBody";
import "../../../Layout/Feed/PostView.css";
import { Link } from "react-router-dom";

class PostView extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        return (
            <div className="postView">
                <Link to={`/post/${this.state.post.documentID}/${this.state.post.isTopicPost}`} className="postViewLink">
                    <PostHeader post={this.state.post}></PostHeader>
                    {this.selectBody()}
                    <PostFooter post={this.state.post}></PostFooter>
                </Link>
            </div>
        );
    }

    selectBody = () => {
        switch (this.state.post.type) {
            case "picture":
                return <PicturePostBody post={this.state.post}></PicturePostBody>
            case "thought":
                return <ThoughtPostBody post={this.state.post}></ThoughtPostBody>
            case "link":
                return <LinkPostBody post={this.state.post}></LinkPostBody>
            case "GIF":
                return <GIFPostBody post={this.state.post}></GIFPostBody>
            case "multiPicture":
                return <MultiPicturePostBody post={this.state.post}></MultiPicturePostBody>
            case "youTubeVideo":
                return <YouTubePostBody post={this.state.post}></YouTubePostBody>
            default:
                return <div>DEFAULTBODY</div>
        }
    }

}

export default PostView;
