import React, { Component } from "react";
import "../Layout/App.css";

class Loginform extends Component {
  //-------State------->
  state = {
    email: "",
    password: ""
  };
  //-----Functions----->
  getStyleEmail = () => {
    if (this.state.email === "")
      return {
        display: "block"
      };
    else
      return {
        display: "none"
      };
  };

  getStylePassword = () => {
    if (this.state.password === "")
      return {
        display: "block"
      };
    else
      return {
        display: "none"
      };
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    this.props.logSubmit(this.state.email, this.state.password);
  };
  //------render()----->
  render() {
    return (
      <div>
        <div className="container col-4 text-center" id="c1">
          <div className="form-group ">
            <label for="usrEmail">Email:</label>
            <input
              onChange={this.onChange}
              type="text"
              className="form-control"
              id="usrEmail"
              name="email"
            ></input>
            <div className="alert alert-danger" style={this.getStyleEmail()}>
              Dieses Feld muss ausgefüllt sein
            </div>
            <label for="usrPwd">Passwort:</label>
            <input
              onChange={this.onChange}
              type="text"
              className="form-control"
              id="usrPwd"
              name="password"
            ></input>
            <div className="alert alert-danger" style={this.getStylePassword()}>
              Dieses Feld muss ausgefüllt sein
            </div>
            <button
              onClick={this.onSubmit}
              className="btn btn-primary btn-lg mt-5"
            >
              Einloggen
            </button>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Loginform;
