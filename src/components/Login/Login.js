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

// API
import { authenticateSignUp, authenticateLogIn } from "../../services/api";

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
  error: {
    fontSize: 10,
    color: "#ff6161",
    marginTop: 10,
    fontWeight: 600,
    lineHeight: 0,
  },
});

// LoginDialog Component
const LoginDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();

  const [isSignUp, setIsSignUp] = useState(false);

  const signUpInitialValues = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  };
  const [signUpValues, setSignUpValue] = useState(signUpInitialValues);

  const loginInitialValues = {
    username: "",
    password: "",
  };
  const [loginValues, setLoginValue] = useState(loginInitialValues);

  const [error, setError] = useState(false);

  // set state 'open' to false
  const handleClose = () => {
    setOpen(false);
    setIsSignUp(false);
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

  // Handle Login User
  const loginUser = async () => {
    let response = await authenticateLogIn(loginValues);
    if (!response) {
      setError(true);
      return;
    }
    setAccount(loginValues.username);
    handleClose();
  };

  // Return the login content for the right side
  const getLoginContent = () => (
    <Box className={classes.container}>
      <TextField
        name="username"
        onChange={(event) => onInputChange(event, "login")}
        label="Enter Email/Mobile number"
      />
      <TextField
        name="password"
        onChange={(event) => onInputChange(event, "login")}
        label="Enter Password"
      />

      {error && (
        <Typography className={classes.error}>
          Invalid Username or Password
        </Typography>
      )}

      <Typography className={classes.text}>
        By continuing, you agree to FlipCat's terms of Use and Privacy Policy.
      </Typography>

      <Button
        variant="contained"
        onClick={loginUser}
        className={classes.loginButton}
      >
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

  // Handle SignUp User
  const signupUser = async () => {
    let response = await authenticateSignUp(signUpValues);
    if (!response) return;
    setAccount(signUpValues.username);
    handleClose();
  };

  // Function to Handle SignUp Values
  const onInputChange = (event, type) => {
    let stateFunc = null;
    let stateValue = null;

    if (type === "sigup") {
      stateFunc = setSignUpValue;
      stateValue = signUpValues;
    } else {
      stateFunc = setLoginValue;
      stateValue = loginValues;
    }
    stateFunc({
      ...stateValue,
      [event.target.name]: event.target.value,
    });
  };

  // Return the signup content for the left side
  const getSignupContent = () => (
    <Box className={classes.container}>
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="firstname"
        label="Enter First Name"
      />
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="lastname"
        label="Enter Last Name"
      />
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="username"
        label="Enter Username"
      />
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="email"
        label="Enter Email"
      />
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="password"
        label="Enter Password"
      />
      <TextField
        onChange={(event) => onInputChange(event, "signup")}
        name="phone"
        label="Enter Mobile number"
      />

      <Typography className={classes.text}>
        By continuing, you agree to FlipCat's terms of Use and Privacy Policy.
      </Typography>

      <Button
        variant="contained"
        className={classes.loginButton}
        onClick={() => signupUser()}
      >
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
                "Looks like you're new here!",
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
