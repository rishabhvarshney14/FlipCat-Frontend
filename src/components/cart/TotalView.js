import React, { useEffect, useState } from "react";

// UI Component
import { Box, makeStyles, Typography } from "@material-ui/core";

// Styles
const useStyle = makeStyles({
  component: {
    width: "30%",
    marginLeft: 15,
  },
  header: {
    padding: "15px 24px",
    borderBottom: "1px solid #f0f0f0",
  },
  container: {
    padding: "15px 24px",
    "& > *": {
      marginTop: 20,
      fontSize: 14,
    },
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    float: "right",
  },
});

const TotalView = ({ cartItems }) => {
  const classes = useStyle();

  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    let price = 0,
      discount = 0;
    // eslint-disable-next-line
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  }, [cartItems]);

  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>

      <Box className={classes.container}>
        <Typography>
          Price ({cartItems.length} item){" "}
          <spam className={classes.price}>₹{price}</spam>
        </Typography>
        <Typography>
          Discount <span className={classes.price}>₹{discount}</span>
        </Typography>
        <Typography>
          Delivery Charges <span className={classes.price}>₹100</span>
        </Typography>
        <Typography>
          Total Amount{" "}
          <span className={classes.price}>₹{price - discount + 100}</span>
        </Typography>
        <Typography>
          You wll save: <span className={classes.price}>₹{discount}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
