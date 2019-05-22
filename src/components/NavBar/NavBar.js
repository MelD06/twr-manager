import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.NavBar}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="title" color="inherit">
            TWR-Manager
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
