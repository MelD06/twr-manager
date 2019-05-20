import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

/* ICONS */
import SunnyIcon from "@material-ui/icons/WbSunny";
import CloudyIcon from "@material-ui/icons/WbCloudy";
import StormyIcon from "@material-ui/icons/FlashOn";
import VeryLowIcon from "@material-ui/icons/SignalCellular0Bar";
import LowIcon from "@material-ui/icons/SignalCellular1Bar";
import MediumIcon from "@material-ui/icons/SignalCellular2Bar";
import HighIcon from "@material-ui/icons/SignalCellular3Bar";
import VeryHighIcon from "@material-ui/icons/SignalCellular4Bar";
import NoDataIcon from "@material-ui/icons/NotInterested";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Create";

import classes from "./FileSummary.module.css";
import { CardActionArea } from "@material-ui/core";

/*****************
 * This Component uses material-ui to
 * show a summary of a file, the element
 * is clickable and leads to a file detail
 */
const fileSummary = props => {
  const getWeatherIcon = weather => {
    switch (weather) {
      case "sunny":
        return <SunnyIcon />;
      case "cloudy":
        return <CloudyIcon />;
      case "stormy":
        return <StormyIcon />;
      default:
        return <NoDataIcon />;
    }
  };
  const getLevelIcon = level => {
    switch (level) {
      case "very-low":
        return <VeryLowIcon />;
      case "low":
        return <LowIcon />;
      case "medium":
        return <MediumIcon />;
      case "high":
        return <HighIcon />;
        case "very-high":
          return <VeryHighIcon />;
      default:
        return <NoDataIcon />;
    }
  };

  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardContent>
        <div className={classes.TopSpread}>
        <Typography
            className={classes.title}
            component="h2"
            color="textSecondary"
          >
            {props.date}
          </Typography>
          <Tooltip title={props.weather}>
          {getWeatherIcon(props.weather)}
        </Tooltip>
        </div>
          
          <Typography>
            {props.text.substring(0, 200) + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardActions}>
      <div className={classes.AdminTools}> 
        <Tooltip title="Supprimer">
          <IconButton aria-label="Supprimer">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Éditer">
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
        </div>
        <div className={classes.fileData}>
          <label>Complexité</label>
        <Tooltip title={props.complexity} placement="right">
          {getLevelIcon(props.complexity)}
        </Tooltip>
      </div>
        <div className={classes.fileData}>
          <label>Trafic</label>
        <Tooltip title={props.traffic} placement="right">
          {getLevelIcon(props.traffic)}
        </Tooltip>
      </div>
      </CardActions>
    </Card>
  );
};

export default fileSummary;
