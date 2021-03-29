import React, { Component } from 'react';
import "../../../Layout/Feed/LinkPostBody.css";
import Post from "../Post";
import LinkPreview from "../../Icons/link_preview_image.jpg";

class LinkPostBody extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        return (
            <div className="linkPreviewContainer">
                <img className="previewImage" src={LinkPreview} />
                <div className="infoBox">
                    <div className="titleBox">{this.state.post.linkTitle}</div>
                    <div className="descriptionBox">{this.state.post.linkDescription}</div>
                </div>
            </div>
        );
    }


    checkPreview = () => {
        if (this.state.post.linkImageURL) {
            return this.state.post.linkImageURL;
        } else {
            return LinkPreview;
        }
    }



}

export default LinkPostBody;
