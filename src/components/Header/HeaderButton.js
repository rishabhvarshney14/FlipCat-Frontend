import React from "react";
import { Link } from "react-router-dom";

// UI Components
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

    // Style for Childrens
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#FFF",
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
      <Link>
        <Button variant="contained" className={classes.login}>
          Login
        </Button>
      </Link>

      <Link>
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>

      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
    </Box>
  );
};

export default HeaderButton;
