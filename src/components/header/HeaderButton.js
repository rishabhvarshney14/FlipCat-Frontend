import React from "react";

// UI Componets
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

// Styles
const useStyle = makeStyles({
  login: {
    background: "#FFFFFF",
    color: "#2F4575",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
  },
  wrapper: {
    margin: " 0 5%  0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
    },
  },
  container: {
    display: "flex",
  },
});

// HeaderButton Component
const HeaderButton = () => {
  const classes = useStyle();

  return (
    <Box className={classes.wrapper}>
      <Button variant="contained" className={classes.login}>
        Login
      </Button>

      <Typography style={{ marginTop: 5 }}>More</Typography>

      <Box className={classes.container}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Boxes</Typography>
      </Box>
    </Box>
  );
};

export default HeaderButton;
