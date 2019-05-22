import React from "react";
import { Tooltip } from "@material-ui/core";
import SunnyIcon from "@material-ui/icons/WbSunny";
import CloudyIcon from "@material-ui/icons/WbCloudy";
import StormyIcon from "@material-ui/icons/FlashOn";
import NoDataIcon from "@material-ui/icons/NotInterested";


//TODO: Refactor
const weatherIcon = props => {
  let tipTitle = "";
  const getWeatherIcon = weather => {
    switch (weather) {
      case "sunny":
        tipTitle = "CAVOK";
        return <SunnyIcon />;
      case "cloudy":
        tipTitle = "Nuageux";
        return <CloudyIcon />;
      case "stormy":
        tipTitle = "Perturbé";
        return <StormyIcon />;
      default:
        tipTitle = "Aucune Donnée";
        return <NoDataIcon />;
    }
  };
  const Icon = getWeatherIcon(props.weather);

  return (
    <Tooltip title={tipTitle}>
      {Icon}
    </Tooltip>
  );
};

export default weatherIcon;
