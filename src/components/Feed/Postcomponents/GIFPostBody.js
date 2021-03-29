import React, { Component } from 'react';
import "../../../Layout/Feed/GIFPostBody.css"
class GIFPostBody extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        if (this.state.post && this.state.post.gif_link) {
            return (
                <div>
                    <video className="gifVideo" controls loop mute>
                        <source src={this.state.post.gif_link} type="video/mp4"></source>
                        Fehler beim Laden des Videos
                    </video>
                </div>
            );
        } else {
            return (
                <div>
                    Fehler beim Laden des Videos
                </div>
            );
        }

    }
}

export default GIFPostBody;
