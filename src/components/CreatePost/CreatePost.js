import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import Button from "react-bootstrap/Button";
import CreatePostForm from "./CreatePostForm";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: "image" };
  }

  handleRadioButtons = event => {
    switch (event) {
      case 1:
        this.setState({ checked: "image" });
        console.log(this.state.checked);
        break;
      case 2:
        this.setState({ checked: "thought" });
        console.log(this.state.checked);
        break;
      case 3:
        this.setState({ checked: "link" });
        console.log(this.state.checked);
        break;
      case 4:
        this.setState({ checked: "youtube" });
        console.log(this.state.checked);
        break;
    }
  };

  render() {
    return (
      <div className="jumbotron col-6 mx-auto" id="c1">
        <h1 className="display-2 mt-0">Deine Erfahrungen!</h1>
        <ToggleButtonGroup
          onChange={this.handleRadioButtons}
          type="radio"
          name="options"
          defaultValue={1}
        >
          <ToggleButton
            className="btn-light"
            onClick={this.ImgButtonClicked}
            value={1}
          >
            Image
          </ToggleButton>
          <ToggleButton
            className="btn-light"
            onClick={this.ThoughtButtonChlicked}
            value={2}
          >
            Thought
          </ToggleButton>
          <ToggleButton
            className="btn-light"
            onClick={this.LinkButtonChlicked}
            value={3}
          >
            Link
          </ToggleButton>
          <ToggleButton
            className="btn-light"
            onClick={this.YouTubeButtonChlicked}
            value={4}
          >
            YouTube
          </ToggleButton>
        </ToggleButtonGroup>
        <CreatePostForm renderChecked={this.state.checked}></CreatePostForm>
      </div>
    );
  }
}

export default CreatePost;
