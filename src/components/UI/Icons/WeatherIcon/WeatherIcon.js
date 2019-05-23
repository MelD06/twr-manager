import React from "react";
import { Tooltip } from "@material-ui/core";
import SunnyIcon from "@material-ui/icons/WbSunny";
import CloudyIcon from "@material-ui/icons/WbCloudy";
import StormyIcon from "@material-ui/icons/FlashOn";
import NoDataIcon from "@material-ui/icons/NotInterested";


//TODO: Refactor
const weatherIcon = props => {
    switch (props.weather) {
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

export default weatherIcon;
