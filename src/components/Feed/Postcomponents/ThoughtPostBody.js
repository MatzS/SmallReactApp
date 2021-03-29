import { TransferWithinAStation } from '@material-ui/icons';
import React, { Component } from 'react';
import "../../../Layout/Feed/ThoughtPostBody.css"

class ThoughtPostBody extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        if (this.state.post && this.state.post.description) {
            return (
                <div className="thoughtDescription">
                    {this.state.post.description}
                </div>
            );
        } else {
            return (
                null
            );
        }
    }
}

export default ThoughtPostBody;
