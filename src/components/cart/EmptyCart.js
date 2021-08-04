import React from "react";
import { useHistory } from "react-router-dom";

// UI Component
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

// Style
const useStyle = makeStyles({
  component: {
    margin: "80px 40px",
    width: "80%",
    background: "#fff",
  },
  image: {
    width: "15%",
  },
  container: {
    textAlign: "center",
    paddingTop: 70,

    "& > *": {
      marginTop: 10,
      fontSize: 14,
    },
  },
  button: {
    marginTop: 20,
    padding: "12px 70px",
    borderRadius: 2,
    fontSize: 14,
    background: "#2874f0",
    color: "#fff",
  },
});

const EmptyCart = () => {
  const classes = useStyle();
  const history = useHistory();
  const emptycarturl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  const addItem = () => {
    history.push("/");
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <img src={emptycarturl} className={classes.image} alt="Empty Cart" />
        <Typography>Your cart is Empty!</Typography>
        <Typography>Add items to it now.</Typography>
        <Button
          className={classes.button}
          variant="contained"
          onClick={() => addItem()}
        >
          SHOW NOW
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
