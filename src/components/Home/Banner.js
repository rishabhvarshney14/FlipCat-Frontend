import React from "react";

// UI Component
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

// Custom Data
import { bannerData } from "../../constants/data";

// Styles
const useStyles = makeStyles({
  container: {
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: 500,
  },
});

// Banner Component
const Banner = () => {
  const classes = useStyles();

  return (
    <Carousel
      className={classes.container}
      autoPlay
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible
      cycleNavigation
    >
      {bannerData.map((image) => (
        <img className={classes.image} src={image} alt="banner-img" />
      ))}
    </Carousel>
  );
};

export default Banner;
