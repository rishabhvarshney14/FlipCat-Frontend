import React from "react";
import clsx from "clsx";

// UI Components
import { Box, Button, makeStyles } from "@material-ui/core";
import { ShoppingCart, FlashOn } from "@material-ui/icons";

// Styles
const useStyle = makeStyles({
  leftContainer: {
    padding: "40px 0 0 80px",
  },
  image: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "87%",
  },
  button: {
    height: 50,
    width: "46%",
    borderRadius: 2,
  },
  addToCart: {
    background: "#ff9f00",
    color: "#fff",
    marginRight: 10,
  },
  buyNow: {
    background: "#fb641b",
    color: "#fff",
  },
});

// ActionItems Component
const ActionItems = ({ product }) => {
  const classes = useStyle();

  return (
    <Box className={classes.leftContainer}>
      <img className={classes.image} src={product.detailUrl} />

      <Button
        variant="contained"
        className={clsx(classes.button, classes.addToCart)}
      >
        <ShoppingCart />
        Add to Cart
      </Button>

      <Button
        variant="contained"
        className={clsx(classes.button, classes.buyNow)}
      >
        <FlashOn />
        Buy Now
      </Button>
    </Box>
  );
};

export default ActionItems;
