import React, { useState } from "react";

// UI Components
import { Dialog, DialogContent, makeStyles, Box } from "@material-ui/core";

// Custom Component
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";

// Styles
const useStyle = makeStyles({
  component: {
    height: "70vh",
    width: "90vh",
  },
});

// LoginDialog Component
const LoginDialog = ({ open, setOpen, setAccount }) => {
  const classes = useStyle();
  const [isSignUp, setIsSignUp] = useState(false);

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

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }}>
          <LeftSideContent isSignUp={isSignUp} />

          <RightSideContent
            isSignUp={isSignUp}
            handleClose={handleClose}
            toggleSignup={toggleSignup}
            setAccount={setAccount}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
