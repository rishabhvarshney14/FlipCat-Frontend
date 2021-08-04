import React, { useEffect } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";

// UI Components
import {
  Box,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { LocalOffer } from "@material-ui/icons";

// Custom Components
import ActionItems from "./ActionItems";

// Styles
const useStyle = makeStyles({
  component: {
    marginTop: 55,
    background: "f2f2f2",
  },
  container: {
    margin: "0 80px",
    background: "#FFF",
    display: "flex",
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  smallText: {
    fontSize: 14,
    verticalAlign: "baseline",
    "& > *": {
      fontSize: 14,
      marginTop: 10,
    },
  },
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 28,
  },
  badge: {
    fontSize: 14,
    marginRight: 10,
    color: "#00CC00",
  },
});

// DetailView Component
const DetailView = ({ match }) => {
  const classes = useStyle();
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  const { product } = useSelector((state) => state.getProductDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Box className={classes.component}>
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%", maxWidth: "60%" }}>
            <ActionItems product={product} />
          </Box>

          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>

            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              5 Ratings and 1 Review
            </Typography>

            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} Off
              </span>
            </Typography>

            <Typography style={{ marginTop: 20, fontWeight: 600 }}>
              Available Offers
            </Typography>
            <Box className={classes.smallText}>
              <Typography>
                <LocalOffer className={classes.badge} />
                Special Price get extra 10% off (price Inclusive of discount)
              </Typography>
              <Typography>
                <LocalOffer className={classes.badge} />
                Bank Offer 5% Unlimited Cashback on FlipCat Atomic Bank Credit
                Card
              </Typography>
              <Typography>
                <LocalOffer className={classes.badge} />
                Bank Offer 10% Off on Bank of Cats Mastercard debit card first
                time transaction.
              </Typography>
              <Typography>
                <LocalOffer className={classes.badge} />
                Bank Offer 10% Off on First time ICatsICatsI Mastercard Credit
                Card transaction.
              </Typography>
            </Box>

            <Table>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Delivery
                  </TableCell>
                  <TableCell>{date.toDateString()} | ₹500</TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Warranty
                  </TableCell>
                  <TableCell>No Warranty</TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Seller
                  </TableCell>
                  <TableCell className={classes.smallText}>
                    <span style={{ color: "#2874f0" }}>Batman's Cat</span>
                    <Typography>14 Days Return Policy</Typography>
                    <Typography>
                      View more sellers starting from ₹{product.price.cost}
                    </Typography>
                  </TableCell>
                </TableRow>

                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>
                    Description
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;
