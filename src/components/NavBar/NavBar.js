import React from "react";
import { Button, Toolbar, Typography, AppBar, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


import classes from "./NavBar.module.css";

const NavBar = (props) => {

  return (
    <div className={classes.NavBar}>
      <AppBar position="fixed">
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu" onClick={props.menuToggle} className={classes.MenuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" color="inherit">
            TWR-Manager
          </Typography>
          <div className={classes.UserArea}>
          <span>
          {props.user ? props.user : null}

          </span>
          {props.user ? <Button onClick={props.disconnect}>Deconnexion</Button> : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
