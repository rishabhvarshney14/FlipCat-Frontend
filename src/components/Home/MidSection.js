import React from "react";

// UI Components
import { Box, makeStyles } from "@material-ui/core";

// Custom Data
import { midSectionData } from "../../constants/data";

// Styles
const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
  },
  images: {
    height: 250,
    width: "33%",
  },
});

const MidSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      {midSectionData.map((image) => (
        <img src={image} className={classes.images} alt="img" />
      ))}
    </Box>
  );
};

export default MidSection;
