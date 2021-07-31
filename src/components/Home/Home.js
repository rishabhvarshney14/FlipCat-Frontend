import React from "react";

// UI Component
import { Box, makeStyles } from "@material-ui/core";

// Custom Component
import NavBar from "./NavBar";
import Banner from "./Banner";

// Styles
const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

// Home Component
const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
      </Box>
    </div>
  );
};

export default Home;
