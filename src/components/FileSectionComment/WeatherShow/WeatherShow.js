import React from 'react';
import { Tooltip } from '@material-ui/core';
import WeatherIcon from '../../UI/Icons/WeatherIcon/WeatherIcon';
 
import classes from './WeatherShow.module.css';

const WeatherShow = (props) => {
  let tipTitle = '';
  switch (props.weather) {
    case "sunny":
      tipTitle = "CAVOK";
      break;
    case "cloudy":
      tipTitle = "Nuageux";
      break;
    case "stormy":
      tipTitle = "Perturbé";
      break;
    default:
      tipTitle = "Aucune Donnée";
      break;
  }

    return ( 
        <div className={classes.LevelIcon}>
          <label>Météo</label>
        <Tooltip title={tipTitle}>
          <WeatherIcon weather={props.weather} />
        </Tooltip>
      </div>);
};

export default WeatherShow;