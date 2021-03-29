import React, { Component } from 'react';
import "../../../Layout/Feed/PostFooter.css";
import HaIcon from "../../Icons/ha_button1.png";
import NiceIcon from "../../Icons/nice_button1.png";
import ThanksIcon from "../../Icons/thanks_button1.png";
import WowIcon from "../../Icons/wow_button1.png";
import CommentIcon from "../../Icons/comment_icon.png";

class PostFooter extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        return (
            <div className="postFooterContainer">
                <button type="button">
                    <img className="footerButtonImage" src={ThanksIcon}></img>
                </button>
                <button type="button">
                    <img className="footerButtonImage" src={WowIcon}></img>
                </button>
                <button type="button">
                    <img className="footerButtonImage" src={HaIcon}></img>
                </button>
                <button type="button">
                    <img className="footerButtonImage" src={NiceIcon}></img>
                </button>
                <div>
                    <img id="comment" src={CommentIcon} className="footerCommentIcon"></img>
                    <label className="footerLabel" for="comment">{this.state.post.commentCount}</label>
                </div>
            </div>
        );
    }
}

export default PostFooter;
