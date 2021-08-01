import React from "react";

// UI Components
import { Box, Typography, makeStyles } from "@material-ui/core";

// Custom Data
import { navData } from "../../constants/data";

// Styles
const useStyle = makeStyles({
  component: {
    display: "flex",
    margin: "5px 130px 0 130px",
    justifyContent: "space-between",
  },
  container: {
    textAlign: "center",
    padding: "12px 8px",
  },
  image: {
    width: 65,
    height: 60,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
  },
});

// NavBar Component
const NavBar = () => {
  const classes = useStyle();

  return (
    <Box className={classes.component}>
      {navData.map((data) => (
        <div className={classes.container}>
          <img src={data.url} className={classes.image} alt={data.text} />
          <Typography>{data.text}</Typography>
        </div>
      ))}
    </Box>
  );
};

export default NavBar;
