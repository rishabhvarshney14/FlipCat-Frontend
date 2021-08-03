import React from "react";

// UI Component
import { Box, Typography, makeStyles } from "@material-ui/core";

// Styles
const useStyle = makeStyles({
  image: {
    backgroundImage: `url(${"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"})`,
    height: "60.5vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 35px",
    "& > *": {
      color: "#FFFFFF",
      fontWeight: 600,
    },
  },
});

// LeftSideContnet Component
const LeftSideContent = ({ isSignUp }) => {
  const classes = useStyle();

  const getContent = (heading, text) => (
    <Box className={classes.image}>
      <Typography variant="h5">{heading}</Typography>
      <Typography style={{ marginTop: 20 }}>{text}</Typography>
    </Box>
  );

  return (
    <>
      {isSignUp
        ? getContent(
            "Looks like you're new here!",
            "Sign Up with your E-mail/Mobile Number to continue."
          )
        : getContent(
            "Login",
            "Get acess to your Orders, Wishlist and Recommendations"
          )}
    </>
  );
};

export default LeftSideContent;
