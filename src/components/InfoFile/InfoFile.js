import React from "react";
import { Typography, Paper, Grid, Tooltip, IconButton } from "@material-ui/core";
import LevelShow from '../FileSectionComment/LevelShow/LevelShow';
import classes from "./InfoFile.module.css";
import WeatherShow from '../FileSectionComment/WeatherShow/WeatherShow';
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import DateSelector from '../UI/Menu/DateSelector/DateSelector';
import TimeIntervalSelector from "../UI/Menu/TimeIntervalSelector/TimeIntervalSelector";
import LevelSelector from '../UI/Menu/LevelSelector/LevelSelector';
import WeatherSelector from '../UI/Menu/WeatherSelector/WeatherSelector';


const infoFile = props => {
  let date = props.data.date.toLocaleDateString("fr-FR", {year: 'numeric', month:'long', day: 'numeric'});
  let time = 'De ' + ("0" + props.data.time.start.getHours()).slice(-2) + ':' + ("0" + props.data.time.start.getMinutes()).slice(-2) + ' a ' + ("0" + props.data.time.end.getHours()).slice(-2) + ':' + ("0" + props.data.time.end.getMinutes()).slice(-2);
  let complexity = <LevelShow level={props.data.complexity} label="Complexité" />;
  let traffic = <LevelShow level={props.data.traffic} label="Trafic" />;
  let weather = (<WeatherShow weather={props.data.weather} />);


  if(props.data.edit){
    date = <DateSelector value={props.data.date} change={props.onDateChange} />;
    //time = <TimeIntervalSelector />
    complexity = <LevelSelector value={props.data.complexity} changeLevel={props.onLevelChange} helperText="Complexité" type="complexity" />;
    traffic = <LevelSelector value={props.data.traffic} changeLevel={props.onLevelChange} helperText="Trafic" type="traffic" />;
    weather = <WeatherSelector value={props.data.weather} changeWeather={props.onWeatherChange} />
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
        {weather}
        <Typography component="p">
        QFU: 17 ET/OU 35<br />
        Positions : SOL, LOC, COOR<br />
      </Typography>
        </Grid>
        <Grid key="comptraf" item xs={6}>
        {complexity}
        {traffic}
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
