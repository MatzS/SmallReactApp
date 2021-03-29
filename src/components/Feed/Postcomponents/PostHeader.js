import React, { Component } from 'react';
import "../../../Layout/Feed/PostHeader.css"
import DefaultUser from "../../Icons/default_user.jpg";
import AnonymUser from "../../Icons/anonym_user.png";
class PostHeader extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null
    }

    render() {
        if (this.state.post != null) {
            return (
                <div className="postHeader">
                    <div className="userHeader">
                        <div className="profilePictureContainer">
                            <img className="" src={this.checkImageURL()}></img>
                        </div>
                        <div className="nameTimeContainer">
                            <div className="nameRow">
                                <h3>{this.state.post.user.userName + " " + this.state.post.user.userSurname}</h3>
                            </div>
                            <div className="timeRow">
                                <p>{this.state.post.createTimeString}</p>
                            </div>
                        </div>
                    </div>
                    <div className="titleHeader">
                        <div className="postTitle">
                            {this.state.post.title}
                        </div>
                    </div>
                </div>
            );
        } else {
            return <div></div>;
        }

    }

    checkImageURL = () => {
        if (this.state.post.user.profilePicture) {
            return this.state.post.user.profilePicture;
        } else {
            if (this.state.post.user.full_name == "anonym") {
                return AnonymUser;
            } else {
                return DefaultUser;
            }

        }
    }
}

export default PostHeader;
