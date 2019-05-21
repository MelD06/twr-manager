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
import NoDataIcon from "@material-ui/icons/NotInterested";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Create";

import LevelIcon from '../../components/UI/LevelIcon/LevelIcon';

import classes from "./FileSummary.module.css";
import { CardActionArea } from "@material-ui/core";
import { Link } from 'react-router-dom';

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


  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <Link to={'/files/' + props.id } className={classes.FileSummaryLink} >
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
        </Link>
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

        <LevelIcon label="Complexité" level={props.complexity} />
        <LevelIcon label="Traffic" level={props.traffic} />
      </CardActions>
    </Card>
  );
};

export default fileSummary;
