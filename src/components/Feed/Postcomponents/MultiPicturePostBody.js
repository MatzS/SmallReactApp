import React, { Component } from 'react';
import Dummy from "../../Icons/default_user.jpg";
import "../../../Layout/Feed/MultiPicturePostBody.css";

class MultiPicturePostBody extends Component {

    constructor(props) {
        super(props);
        this.state.post = props.post;
    }

    state = {
        post: null,
        slideIndex: 0
    }

    render() {
        return (
            <div id="slideshow-container" className="slideshow-container">

            </div>
        );
    }

    componentDidMount = () => {
        this.fillSlides();
    }

    fillSlides = () => {
        if (this.state.post.mpicture_imageURLs &&
            this.state.post.mpicture_imageURLs.length > 1) {
            var array = Array.from(this.state.post.mpicture_imageURLs);
            array.forEach((url) => {
                var dv = document.createElement("div");
                dv.className = "mySlides"
                dv.innerHTML = "<img src=" + url + " />";
                document.getElementById('slideshow-container').appendChild(dv);
            });
            this.showSlides();
        } else {
            return <div></div>
        }
    }

    showSlides = () => {

        try{
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].className = "mySlides gone"
            }
            this.state.slideIndex++;
            if (this.state.slideIndex > slides.length) { this.state.slideIndex = 1 }
            slides[this.state.slideIndex - 1].className = "mySlides appears";
            setTimeout(this.showSlides, 5000); // Change image every 2 seconds
        }catch(error){
            console.log(error.message);
            return;
        }
    }
}

export default MultiPicturePostBody;
