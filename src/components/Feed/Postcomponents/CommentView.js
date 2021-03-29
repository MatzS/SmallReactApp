import React, { Component } from 'react';
import "../../../Layout/Feed/CommentView.css";
import Comment from "./Comment";

class CommentView extends Component {

    constructor(props) {
        super(props)
        this.state.comments = props.comments;
    }

    state = {
        comments: []
    }

    render() {
        return (
            <div className="commentsContainer">
                <h1>Kommentare</h1>
                {this.state.comments.map((comment) => (<Comment comment={comment}></Comment>))}
            </div>
        );
    }
}

export default CommentView;
