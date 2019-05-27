import React from "react";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import AddIcon from "@material-ui/icons/AddCircle";

import classes from "./Toolbar.module.css";

const Toolbar = props => {

  return (
  <div className={classes.Toolbar}>
    <Typography align="left">Page 1 de 20 sur 235 entrées</Typography>
    <Button variant="contained" size="small" className={classes.button} onClick={props.newFile}>
        <AddIcon className={classes.iconSmall} />
        Nouveau
      </Button>
</div>)
};

export default Toolbar;
