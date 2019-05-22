import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import LevelIcon from '../FileSectionComment/LevelIcon/LevelIcon';
import classes from "./InfoFile.module.css";
import WeatherIcon from '../UI/Icons/WeatherIcon/WeatherIcon';

const infoFile = props => {
  return (
    <Paper className={classes.infoPaper}>
      <Grid container spacing={8} justify="space-between">
        <Grid key="date" item xs={6}>
          <Typography component="h2"
            color="textSecondary">
            {props.data.date}
          </Typography>         
          <Typography component="h5">
            {props.data.time}
          </Typography>
        </Grid>
        <Grid key="intruction" item xs={6}>
          <Typography variant="body1">
            <i>
              Elève: {props.data.student}<br />
              Instructeur: {props.data.instructor}
            </i>
          </Typography>
        </Grid>
        {/* SECOND LINE */}
        <Grid key="parameters" item xs={6}>
        <Typography component="p">
        Meteo: <WeatherIcon weather={props.data.weather} /><br />
        <br />
        QFU: 17 ET/OU 35<br />
        Positions : SOL, LOC, COOR<br />
      </Typography>
        </Grid>
        <Grid key="comptraf" item xs={6}>
        <LevelIcon level={props.data.complexity} label="Complexité" />
        <LevelIcon level={props.data.traffic} label="Trafic" />
        </Grid>
      </Grid>


    </Paper>
  );
};

export default infoFile;
