import React from "react";

// UI Components
import { makeStyles, alpha, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons";

// Styles
const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: "30%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    paddingTop: 5,
    height: "100%",
    pointerEvents: "none",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 10,
  },
}));

// SearchBar Component
const SearchBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Searc for Cats"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
      <div className={classes.searchIcon}>
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
