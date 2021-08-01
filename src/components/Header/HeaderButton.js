import React, { useState } from "react";
import { Link } from "react-router-dom";

// UI Components
import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

// Custom Component
import LoginDialog from "../Login/Login";

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
  const [open, setOpen] = useState(false);

  // Set state 'open' to true
  const openLoginDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      <Link>
        <Button
          variant="contained"
          onClick={openLoginDialog}
          className={classes.login}
        >
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
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default HeaderButton;
