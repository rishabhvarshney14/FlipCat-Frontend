import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// UI Component
import { Box, makeStyles } from "@material-ui/core";

// Custom Component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";

// Redux Actions
import { getProducts as productsList } from "../../redux/actions/productActions";

// Styles
const useStyles = makeStyles({
  component: {
    padding: 10,
    background: "#F2F2F2",
  },
});

// Home Component
const Home = () => {
  const classes = useStyles();
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsList());
  }, [dispatch]);

  return (
    <div>
      <NavBar />

      <Box className={classes.component}>
        <Banner />

        <Slide title="Deals of the Day" products={products} />

        <MidSection />

        <Slide title="Suggested Items" products={products} />
        <Slide title="Discounts for You" products={products} />
        <Slide title="Suggested for You" products={products} />
        <Slide title="Top Selection" products={products} />
        <Slide title="More to Explore" products={products} />
      </Box>
    </div>
  );
};

export default Home;
