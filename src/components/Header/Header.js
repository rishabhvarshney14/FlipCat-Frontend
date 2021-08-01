import React from "react";
import { Link } from "react-router-dom";

// UI Components
import { AppBar, Toolbar, makeStyles, withStyles } from "@material-ui/core";

// Custom Components
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";

// Styles
const useStyle = makeStyles({
  header: {
    backgroundColor: "#273961",
    height: 55,
  },
  logo: {
    fontSize: 25,
  },
  component: {
    marginLeft: "12%",
  },
  logoLink: {
    textDecoration: "none",
    color: "white",
  },
});

// Update Styles
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

// Header Component
const Header = () => {
  const classes = useStyle();

  return (
    <AppBar position="static" className={classes.header}>
      <ToolBar className={classes.component}>
        <Link to="/" className={classes.logoLink}>
          <h3 className={classes.logo}>FlipCat</h3>
        </Link>
        <SearchBar />
        <HeaderButton />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
