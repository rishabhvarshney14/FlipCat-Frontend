import React from "react";

// UI Component
import { Box, makeStyles } from "@material-ui/core";

// Custom Component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

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
        <Slide title="Deals of the Day" />
      </Box>

      <MidSection />

      <Slide title="Suggested Items" />
      <Slide title="Discounts for You" />
      <Slide title="Suggested for You" />
      <Slide title="Top Selection" />
      <Slide title="More to Explore" />
    </div>
  );
};

export default Home;
