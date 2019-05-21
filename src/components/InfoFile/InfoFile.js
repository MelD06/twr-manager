import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import LevelIcon from '../UI/LevelIcon/LevelIcon';
import classes from "./InfoFile.module.css";

const infoFile = props => {
  return (
    <Paper className={classes.infoPaper}>
      <Grid container spacing={8} justify="space-between">
        <Grid key="date" item xs={6}>
          <Typography component="h2"
            color="textSecondary">
            23-03-2019
          </Typography>          <Typography component="h5">
            De 9H a 18H<br />
            <i>Configuration : i2</i>
          </Typography>
        </Grid>
        <Grid key="intruction" item xs={6}>
          <Typography variant="body1">
            <i>
              Elève: DIEZ Melvin<br />
              Instructeur: BGS
            </i>
          </Typography>
        </Grid>
        {/* SECOND LINE */}
        <Grid key="intruction" item xs={6}>
        <Typography component="p">
        Meteo: Nuageux<br />
        <LevelIcon level={props.complexity} label="Complexité" /><br />
        QFU: 17 ET/OU 35<br />
      </Typography>
        </Grid>
        <Grid key="intruction" item xs={6}>
        <Typography component="p">
        METAR: ###<br />
        <LevelIcon level={props.traffic} label="Trafic" /><br />
        Positions : SOL, LOC, COOR<br />
      </Typography>
        </Grid>
      </Grid>


    </Paper>
  );
};

export default infoFile;
