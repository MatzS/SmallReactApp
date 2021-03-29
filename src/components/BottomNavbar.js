import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "0px",
    padding: "0px",
    backgroundColor: "#f3f3f3"
  }
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <BottomNavigation
      value={value}
      // onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction label="Feed" value="feed" icon={<ListIcon />} />

      <BottomNavigationAction
        label="Chats"
        value="chats"
        icon={<QuestionAnswerIcon />}
      />
      <BottomNavigationAction
        label="Neuer Post"
        value="newPost"
        icon={<LibraryAddIcon />}
      />
      <BottomNavigationAction
        label="Fakten"
        value="facts"
        icon={<DynamicFeedIcon />}
      />
      <BottomNavigationAction
        label="Freunde"
        value="friends"
        icon={<PeopleIcon />}
      />
    </BottomNavigation>
  );
}
