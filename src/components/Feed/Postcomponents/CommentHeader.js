import React, { Component } from 'react';
import DefaultUser from "../../Icons/default_user.jpg";
import AnonymUser from "../../Icons/anonym_user.png";

class CommentHeader extends Component {

    constructor(props) {
        super(props);
        this.state.comment = props.comment;
    }

    state = {
        comment: null
    }

    render() {
        return (
            <div className="commentUserHeader">
                <div className="commentProfilePictureContainer">
                    <img className="" src={this.checkImageURL()}></img>
                </div>
                <div className="commentNameTimeContainer">
                    <div className="nameRow">
                        <h3>{this.state.comment.user.userName + " " + this.state.comment.user.userSurname}</h3>
                    </div>
                    <div className="timeRow">
                        <p>{this.state.comment.sentAtString}</p>
                    </div>
                </div>
            </div>
        );
    }

    checkImageURL = () => {
        if (this.state.comment.user.profilePicture) {
            return this.state.comment.user.profilePicture;
        } else {
            if (this.state.comment.user.full_name == "anonym") {
                return AnonymUser;
            } else {
                return DefaultUser;
            }

        }
    }

}

export default CommentHeader;
