import React from "react";
import classes from "./FileTargets.module.css";
import { Grid } from "@material-ui/core";

const fileTargets = props => {

  return (
    <div className={classes.FileObjectives}>
      <Grid
        container
        spacing={0}
        justify="center"
        className={classes.FileObjectives}
      >
        <Grid key="Atteint" item xs={12}>
          {props.target === 'ok' ? <span style={{backgroundColor:'#3ba01c', color:'white'}}>ATTEINT</span> : <span>ATTEINT</span> }
        </Grid>
        <Grid key="Enc" item xs={12}>
        {props.target === 'progress' ? <span style={{backgroundColor:'#e0bd33', color:'black'}}>EN COURS</span> : <span>EN COURS</span> }
        </Grid>
        <Grid key="Insuf" item xs={12}>
        {props.target === 'insufficient' ? <span style={{backgroundColor:'#99332c', color:'white'}}>INSUFFISANT</span> : <span>INSUFFISANT</span> }
        </Grid>
      </Grid>
    </div>
  );
};

export default fileTargets;
