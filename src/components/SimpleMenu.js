import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "react-router-dom/Link";
import firebase from "firebase";

export class SimpleMenu extends Component {
  constructor(props) {
    super(props);
    this.state.anchorEl = null;
  }

  state = {
    anchorEl: ""
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    if (this.props.user === null) {
      return (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={this.state.anchorEl}
            keepMounted
            open={Boolean(this.state.anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem component={Link} to={"/login"} onClick={this.handleClose}>
              Login
            </MenuItem>

            <MenuItem
              component={Link}
              to={"/signUp"}
              onClick={this.handleClose}
            >
              Registrieren
            </MenuItem>
          </Menu>
        </div>
      );
    } else return <Button onClick={this.props.logout}>Ausloggen</Button>;
  }
}
export default SimpleMenu;
