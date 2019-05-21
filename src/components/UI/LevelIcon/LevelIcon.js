import React from 'react';
import VeryLowIcon from "@material-ui/icons/SignalCellular0Bar";
import LowIcon from "@material-ui/icons/SignalCellular1Bar";
import MediumIcon from "@material-ui/icons/SignalCellular2Bar";
import HighIcon from "@material-ui/icons/SignalCellular3Bar";
import VeryHighIcon from "@material-ui/icons/SignalCellular4Bar";
import NoDataIcon from "@material-ui/icons/NotInterested";

import { Tooltip } from '@material-ui/core';

import classes from './LevelIcon.module.css';

const levelIcon = (props) => {
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
        <div className={classes.LevelIcon}>
          <label>{props.label}</label>
        <Tooltip title={props.level ? props.level : "Aucune donnée"}>
          {getLevelIcon(props.level)}
        </Tooltip>
      </div>);
};

export default levelIcon;