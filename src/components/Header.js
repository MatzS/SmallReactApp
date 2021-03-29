import React, { Component } from "react";
import Link from "react-router-dom/Link";
import SimpleMenu from "./SimpleMenu";
import "bootstrap/dist/css/bootstrap.css";
import "../Layout/App.css";
import Logo from "./Icons/ImagineLogo.png";

export class Header extends Component {
  dropClick = () => {
    console.log("Olla");
  };

  itemClicked = () => {
    console.log("Oinks");
  };

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to={"/"}>
            <div className="float-right text-capitalize">Imagine</div>
          </Link>
          <SimpleMenu user={this.props.user} logout={this.props.logout} />
        </nav>
      </div>
    );
  }
}

export default Header;
