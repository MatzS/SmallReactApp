import React, { Component } from 'react';
import LinkPreview from "../Icons/link_preview_image.jpg";
import { Link } from "react-router-dom";

class CommunityView extends Component {

    constructor(props) {
        super(props);
        this.state.community = props.community;
    }

    state = {
        community: null
    }

    render() {
        return (
            <Link to={`/community/${this.state.community.topicID}`} className="communityViewLink">
                <div className="communityView">
                    <div className="imageContainer">
                        <img src={this.checkImageURL()}></img>
                    </div>
                    <div className="descriptionContainer">
                        <div className="titleContainer">
                            {this.state.community.name}
                        </div>
                        <div className="description">
                            {this.state.community.description}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }


    checkImageURL = () => {
        if (this.state.community.imageURL) {
            return this.state.community.imageURL;
        } else {
            return LinkPreview;
        }
    }
}

export default CommunityView;
