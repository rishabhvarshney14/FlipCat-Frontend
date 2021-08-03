import React, { useState } from "react";
import { Link } from "react-router-dom";

// UI Components
import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";

// Styles
const useStyle = makeStyles({
  component: {
    marginTop: 40,
  },
  logout: {
    marginLeft: 20,
    fontSize: 14,
  },
});

// Profile Component
const Profile = ({ account, setAccount }) => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  // handle Close
  const handleClose = () => {
    setOpen(false);
    logout();
  };

  // handle Logout
  const logout = () => {
    setAccount("");
  };

  // handle Open
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <Link>
        <Typography onClick={handleClick} style={{ marginTop: 5 }}>
          {account}
        </Typography>
      </Link>

      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        className={classes.component}
      >
        <MenuItem onClick={handleClose}>
          <PowerSettingsNew fontSize="small" color="primary" />{" "}
          <Typography className={classes.logout}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
