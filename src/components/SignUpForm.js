import React, { Component } from "react";
import "../Layout/App.css";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: ""
  };

  checkPassword = () => {
    if (this.state.password === this.state.passwordRepeat) {
      return {
        display: "none"
      };
    } else {
      return {
        display: "block"
      };
    }
  };

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

  getStylePasswordRep = () => {
    if (this.state.passwordRepeat === "") return { display: "block" };
    else
      return {
        display: "none"
      };
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  regSubmit = e => {
    this.props.regSubmit(
      this.state.email,
      this.state.password,
      this.state.passwordRepeat
    );
  };

  render() {
    return (
      <div>
        <div className="container col-xs-11 col-sm-10 col-md-6 col-lg-4  text-center" id="c1">
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
              type="password"
              className="form-control"
              id="usrPwd"
              name="password"
            ></input>
            <div className="alert alert-danger" style={this.getStylePassword()}>
              Dieses Feld muss ausgefüllt sein
            </div>
            <label for="usrPwdRepeat">Password wiederholen:</label>
            <input
              onChange={this.onChange}
              type="password"
              className="form-control"
              id="usrPwdRepeat"
              name="passwordRepeat"
            ></input>
            <div
              className="alert alert-danger"
              style={this.getStylePasswordRep()}
            >
              Dieses Feld muss ausgefüllt sein
            </div>
            <div className="alert alert-danger" style={this.checkPassword()}>
              Passwörter stimmen nicht überein!
            </div>
            <button
              onClick={this.regSubmit}
              className="btn btn-primary btn-lg mt-5"
            >
              Registrieren
            </button>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
