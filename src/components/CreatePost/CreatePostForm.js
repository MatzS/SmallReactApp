import React, { Component } from "react";
import ImagePostForm from "./ImagePostForm";
import ThoughtPostForm from "./ThoughtPostForm";
import YouTubePostForm from "./YouTubePostForm";
import LinkPostForm from "./LinkPostForm";

class CreatePostForm extends Component {
  state = {};
  render() {
    if (this.props.renderChecked == "image")
      return <ImagePostForm></ImagePostForm>;
    if (this.props.renderChecked == "thought")
      return <ThoughtPostForm></ThoughtPostForm>;
    if (this.props.renderChecked == "link")
      return <LinkPostForm></LinkPostForm>;
    if (this.props.renderChecked == "youtube")
      return <YouTubePostForm></YouTubePostForm>;
  }
}

export default CreatePostForm;
