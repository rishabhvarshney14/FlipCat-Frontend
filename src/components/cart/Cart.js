import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

// UI Component
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

// Custom Component
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

// Styles
const useStyle = makeStyles({
  component: {
    marginTop: 55,
    padding: "30px 135px",
    display: "flex",
  },
  leftComponent: {
    width: "67%",
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    padding: "16px 23px",
    background: "#fff",
    borderTop: "1px solid #f0f0f0",
    boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
  },
  placeOrder: {
    background: "#fb641b",
    color: "#fff",
    borderRadius: 2,
    width: 200,
    height: 50,
    display: "flex",
    marginLeft: "auto",
  },
});

// Cart Component
const Cart = () => {
  const classes = useStyle();
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {});

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartItems.length ? (
        <Box className={classes.component}>
          <Box className={classes.leftComponent}>
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                My Cart ({cartItems.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}

            <Box className={classes.bottom}>
              <Button
                onClick={() => alert("This is not implemented yet.")}
                className={classes.placeOrder}
                variant="contained"
              >
                PLACE ORDER
              </Button>
            </Box>
          </Box>

          <TotalView cartItems={cartItems} />
        </Box>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
