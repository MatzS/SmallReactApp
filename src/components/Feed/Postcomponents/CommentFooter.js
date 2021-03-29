import React, { Component } from 'react';

class CommentFooter extends Component {

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
                CommentFooter
            </div>
        );
    }
}

export default CommentFooter;
