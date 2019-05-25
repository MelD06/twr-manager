import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Tooltip,
  IconButton,
  Button
} from "@material-ui/core";
import LevelShow from "../FileSectionComment/LevelShow/LevelShow";
import classes from "./InfoFile.module.css";
import WeatherShow from "../FileSectionComment/WeatherShow/WeatherShow";
import EditIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import DateSelector from "../UI/Menu/DateSelector/DateSelector";
import TimeIntervalSelector from "../UI/Menu/TimeIntervalSelector/TimeIntervalSelector";
import SaveIcon from "@material-ui/icons/Save";
import LevelSelector from "../UI/Menu/LevelSelector/LevelSelector";
import WeatherSelector from "../UI/Menu/WeatherSelector/WeatherSelector";
import MultiSelector from "../UI/Menu/MultiSelector/MultiSelector";

const infoFile = props => {
  let date = new Date(props.data.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  let time = "De " + props.data.time.start + " a " + props.data.time.end;
  let complexity = (
    <LevelShow level={props.data.complexity} label="Complexité" />
  );
  let traffic = <LevelShow level={props.data.traffic} label="Trafic" />;
  let weather = <WeatherShow weather={props.data.weather} />;
  let runways = props.data.runways;
  let positions = props.data.positions;
  let tools = (
    <React.Fragment >
    <Tooltip title="Éditer">
      <IconButton aria-label="Edit" onClick={props.onEditToggle}>
        <EditIcon />
      </IconButton>
    </Tooltip>
          <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={props.onDelete}
        >
          <DeleteIcon className={classes.saveIcon} />
          Supprimer la Fiche
        </Button>
        </React.Fragment>
  );

  if (props.data.edit) {
    date = <DateSelector value={props.data.date} change={props.onDateChange} />;
    time = <TimeIntervalSelector start={props.data.time.start} end={props.data.time.end} change={props.onTimeChange} />
    complexity = (
      <LevelSelector
        value={props.data.complexity}
        changeLevel={props.onLevelChange}
        helperText="Complexité"
        type="complexity"
      />
    );
    traffic = (
      <LevelSelector
        value={props.data.traffic}
        changeLevel={props.onLevelChange}
        helperText="Trafic"
        type="traffic"
      />
    );
    weather = (
      <WeatherSelector
        value={props.data.weather}
        changeWeather={props.onWeatherChange}
      />
    );
    runways = ( <MultiSelector type='runways' selection={props.data.runways} change={props.onMultiChange}/> )
    positions = ( <MultiSelector type='positions' selection={props.data.positions} change={props.onMultiChange}/> )
    tools = (
      <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={props.onEditToggle}
        >
          <SaveIcon className={classes.saveIcon} />
          Sauver
        </Button>
    )
  }
  return (
    <Paper className={classes.InfoFile}>
      <Grid container spacing={8} justify="space-between">
        <Grid key="date" item xs={6}>
          <Typography component="h2" color="textSecondary">
            {date}
          </Typography>
          <Typography component="h5">
            {time}
          </Typography>
        </Grid>
        <Grid key="intruction" item xs={6}>
          <Typography variant="body1">
            <i>
              Elève: {props.data.student}
              <br />
              Instructeur: {props.data.instructor}
            </i>
          </Typography>
        </Grid>
        {/* SECOND LINE */}
        <Grid key="parameters" item xs={6}>
          {weather}
            {runways}
            {positions}
        </Grid>
        <Grid key="comptraf" item xs={6}>
          {complexity}
          {traffic}
        </Grid>
        <Grid key="tools" item xs={12}>
          {tools}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default infoFile;
