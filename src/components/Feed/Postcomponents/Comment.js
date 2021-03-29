import React, { Component } from 'react';
import CommentHeader from "./CommentHeader";
import CommentFooter from "./CommentFooter";
import CommentBody from "./CommentBody";

class CommentHolder extends Component {

    constructor(props) {
        super(props);
        this.state.comment = props.comment;
    }

    state = {
        comment: null
    }

    render() {
        return (
            <div>
                <CommentHeader comment={this.state.comment}></CommentHeader>
                <CommentBody comment={this.state.comment}></CommentBody>
            </div>
        );
    }
}

export default CommentHolder;
