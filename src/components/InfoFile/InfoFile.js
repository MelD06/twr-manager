import React from "react";
import { Typography, Paper, Grid, Tooltip, IconButton } from "@material-ui/core";
import LevelIcon from '../FileSectionComment/LevelIcon/LevelIcon';
import classes from "./InfoFile.module.css";
import WeatherIcon from '../UI/Icons/WeatherIcon/WeatherIcon';
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import DateSelector from '../UI/Menu/DateSelector/DateSelector';
import TimeIntervalSelector from "../UI/Menu/TimeIntervalSelector/TimeIntervalSelector";

const infoFile = props => {
  let date = props.data.date.toLocaleDateString("fr-FR", {year: 'numeric', month:'long', day: 'numeric'});
  let time = 'De ' + ("0" + props.data.time.start.getHours()).slice(-2) + ':' + ("0" + props.data.time.start.getMinutes()).slice(-2) + ' a ' + ("0" + props.data.time.end.getHours()).slice(-2) + ':' + ("0" + props.data.time.end.getMinutes()).slice(-2);
  if(props.data.edit){
    date = <DateSelector value={props.data.date} change={props.onDateChange} />;
    //time = <TimeIntervalSelector />
  }
  return (
    <Paper className={classes.InfoFile}>
      <Grid container spacing={8} justify="space-between">
        <Grid key="date" item xs={6}>
          <Typography component="h2"
            color="textSecondary">
            {date}
          </Typography>         
          <Typography component="h5">
            {time}
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
        <Grid key='tools' item xs={12}>
        <Tooltip title="Éditer" >
        <IconButton aria-label="Edit" onClick={props.onEditToggle}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Supprimer">
            <IconButton aria-label="Supprimer" onClick={props.sectionDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>


    </Paper>
  );
};

export default infoFile;
