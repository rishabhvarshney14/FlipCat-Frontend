import React, { useState } from "react";

// UI Components
import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

// Styles
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
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
  container: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  text: {
    color: "#878787",
    fontSize: 12,
  },
  loginButton: {
    textTransform: "none",
    background: "#FD641B",
    color: "#FFFFFF",
    height: 40,
    borderRadius: 2,
  },
  requestButton: {
    textTransform: "none",
    background: "#FFFFFF",
    color: "#2874F0",
    height: 40,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    fontSize: 14,
    color: "#2874F0",
    fontWeight: 600,
    cursor: "pointer",
  },
});

// LoginDialog Component
const LoginDialog = ({ open, setOpen }) => {
  const classes = useStyle();

  const [isSignUp, setIsSignUp] = useState(false);

  // set state 'open' to false
  const handleClose = () => {
    setOpen(false);
  };

  // Set state 'isSignUp' to true if it is false else otherwise
  const toggleSignup = () => {
    const temp = isSignUp;
    setIsSignUp(!temp);
  };

  // Return the text component for the left side
  const getLeftSide = (heading, text) => (
    <Box className={classes.image}>
      <Typography variant="h5">{heading}</Typography>
      <Typography style={{ marginTop: 20 }}>{text}</Typography>
    </Box>
  );

  // Return the login content for the right side
  const getLoginContent = () => (
    <Box className={classes.container}>
      <TextField name="username" label="Enter Email/Mobile number" />
      <TextField name="password" label="Enter Password" />

      <Typography className={classes.text}>
        By continuing, you agree to FlipCat's terms of Use and Privacy Policy.
      </Typography>

      <Button variant="contained" className={classes.loginButton}>
        Login
      </Button>

      <Typography className={classes.text} style={{ textAlign: "center" }}>
        OR
      </Typography>

      <Button variant="contained" className={classes.requestButton}>
        Request OTP
      </Button>

      <Typography onClick={toggleSignup} className={classes.createText}>
        New to FlipCat? Create an account
      </Typography>
    </Box>
  );

  // Return the signup content for the left side
  const getSignupContent = () => (
    <Box className={classes.container}>
      <TextField name="firstname" label="Enter First Name" />
      <TextField name="secondname" label="Enter Last Name" />
      <TextField name="username" label="Enter Username" />
      <TextField name="email" label="Enter Email" />
      <TextField name="password" label="Enter Password" />
      <TextField name="phone" label="Enter Mobile number" />

      <Typography className={classes.text}>
        By continuing, you agree to FlipCat's terms of Use and Privacy Policy.
      </Typography>

      <Button variant="contained" className={classes.loginButton}>
        Sign Up
      </Button>

      <Button
        onClick={toggleSignup}
        variant="contained"
        className={classes.requestButton}
      >
        Existing User? Log in
      </Button>
    </Box>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          {isSignUp
            ? getLeftSide(
                "Sign Up",
                "Sign Up with your E-mail/Mobile Number to continue."
              )
            : getLeftSide(
                "Login",
                "Get acess to your Orders, Wishlist and Recommendations"
              )}

          {isSignUp ? getSignupContent() : getLoginContent()}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
