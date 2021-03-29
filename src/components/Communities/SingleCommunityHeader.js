import React, { Component } from 'react';
import LinkPreview from "../Icons/link_preview_image.jpg";

class SingleCommunityHeader extends Component {

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
                <div>
                    <div className="communityHeaderImage">
                        <img src={this.checkImageURL()}></img>
                        <div className="communityHeaderName">
                            <h1>{this.state.community.name}</h1>
                            <p>{this.state.community.description}</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>)
        }

    }

    checkImageURL = () => {
        if (this.state.community.imageURL) {
            return this.state.community.imageURL;
        } else {
            return LinkPreview;
        }
    }
}

export default SingleCommunityHeader;
