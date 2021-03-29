import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Button from "react-bootstrap/Button";

class ImagePostForm extends Component {
  state = {};
  render() {
    return (
      <div>
        <InputGroup className="mb-3 mt-3">
          <FormControl
            style={{ height: "50px", border: "none" }}
            placeholder="Titel"
          />
        </InputGroup>
        <InputGroup>
          <FormControl
            style={{ height: "250px", border: "none" }}
            as="textarea"
            placeholder="Beschreibung"
          />
        </InputGroup>
        <div className="input-group">
          <div className="input-group-prepend">
            <Button className="btn-light">Hochladen</Button>
          </div>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <Form>
          <FormCheck type="switch" id="custom-switch" label="Post Markieren" />
          <FormCheck type="switch" label="disabled switch" id="Anonym posten" />
        </Form>
        <Button className="btn-dark btn-lg float-right">Post it!</Button>
      </div>
    );
  }
}

export default ImagePostForm;
