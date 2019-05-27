import React from "react";
import { Button, Toolbar, Typography, AppBar } from "@material-ui/core";
import Firebase from "../../firestore-instance";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const user = Firebase.auth().onAuthStateChanged(user => user);

  const disconnect = () => {
    Firebase.auth().signOut();
    console.log(user)
  };
  return (
    <div className={classes.NavBar}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            TWR-Manager
          </Typography>
          {user ? <Button onClick={disconnect}>Deconnexion</Button> : null}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
