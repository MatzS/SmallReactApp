import React, { Component } from 'react';

class CommentBody extends Component {

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
                <div className="commentBody">{this.state.comment.body}</div>
            </div>
        );
    }
}

export default CommentBody;
