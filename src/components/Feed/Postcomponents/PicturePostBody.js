import React, { Component } from 'react';
import "../../../Layout/Feed/PicturePostBody.css"

class PicturePostBody extends Component {

    constructor(props) {
        super(props)
        this.state.post = this.props.post;
    }

    state = {
        post: null
    }

    render() {
        if (this.state.post == null) {
            return <div></div>
        } else {
            return (
                <div className="pictureContainer">
                    <img src={this.state.post.imageURL}></img>
                </div>
            );
        }
    }
}

export default PicturePostBody;
