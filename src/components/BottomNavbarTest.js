import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ListIcon from "@material-ui/icons/List";
import Link from "react-router-dom/Link";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import "../Layout/BottomNavTest.css";

class BottomNavbarTest extends Component {
  state = {};

  render() {
    return (
      <div style={{ width: "100%", alignContent: "center" }}>
        <ButtonGroup id="bottomNavGroup">
          <Link to={"/feed"}>
            <Button className="btn-lg btn-light" id="bottomNavButton">
              <ListIcon />
            </Button>
          </Link>
          <Link to={"/facts"}>
            <Button className="btn-lg btn-light" id="bottomNavButton">
              <DynamicFeedIcon />
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    );
  }
}

export default BottomNavbarTest;
