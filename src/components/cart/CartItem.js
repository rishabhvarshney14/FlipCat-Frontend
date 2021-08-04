import React from "react";
import clsx from "clsx";

// UI Component
import { Box, Button, Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// Custom Component
import GroupButton from "./GroupButton";

// Styles
const useStyle = makeStyles({
  component: {
    display: "flex",
    borderRadius: 0,
    borderTop: "1px solid #f0f0f0",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  rightComponent: {
    margin: 20,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    height: 110,
    width: 110,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
});

const CartItem = ({ item, removeItemFromCart }) => {
  const classes = useStyle();

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} alt={item.title} />
        <GroupButton />
      </Box>

      <Box className={classes.rightComponent}>
        <Typography>{item.title.longTitle}</Typography>

        <Typography
          className={clsx(classes.smallText, classes.greyTextColor)}
          style={{ marginTop: 10 }}
        >
          Seller: Batman's Cat
        </Typography>

        <Typography style={{ margin: "20px 0" }}>
          <span className={classes.price}>₹{item.price.cost}</span>{" "}
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor}>
            <strike>₹{item.price.mrp}</strike>
          </span>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span>{item.price.discount} off!</span>
        </Typography>
        <Button
          variant="contained"
          className={classes.remove}
          onClick={() => removeItemFromCart(item.id)}
        >
          REMOVE
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
