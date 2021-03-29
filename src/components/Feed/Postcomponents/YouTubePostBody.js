import React, { Component } from 'react';
import "../../../Layout/Feed/YouTubePostBody.css";

export default class YouTubePostBody extends Component {

    constructor(props){
        super(props);
        this.state.post = this.props.post;
        this.getVideoID();
    }

    state = {
        post: null
    }

    render() {
        return (
            <div>
                <iframe className="youTubeFrame" src={"https://www.youtube.com/embed/"+this.state.post.youtube_videoid}>
                </iframe>
            </div>
        )
    }

    getVideoID = () =>{
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var url = new String(this.state.post.youtube_link);
        console.log(url);
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            this.state.post.youtube_videoid = match[2];
        } else {
            this.state.post.youtube_videoid = null;
            console.log("Match:  "+match);
        }
    }
}
