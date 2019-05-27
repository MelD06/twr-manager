import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import AddIcon from "@material-ui/icons/AddCircle";

import classes from "./Toolbar.module.css";

const Toolbar = props => {
  let newButton = null;
  if(props.hasPower){
    newButton = (<Button variant="contained" size="small" className={classes.button} onClick={props.newFile}>
    <AddIcon className={classes.iconSmall} />
    Nouveau
  </Button>);
  }
  return (
  <div className={classes.Toolbar}>
    <Typography align="left">Page 1 de 20 sur 235 entrées</Typography>
    {newButton}
</div>)
};

export default Toolbar;
