import React from 'react';
import { Tooltip } from '@material-ui/core';
import LevelIcon from '../../UI/Icons/LevelIcon/LevelIcon';
 
import classes from './LevelShow.module.css';

const levelShow = (props) => {
    return ( 
        <div className={classes.LevelIcon}>
          <label>{props.label}</label>
        <Tooltip title={props.level ? props.level : "Aucune donnée"}>
          <LevelIcon level={props.level} />
        </Tooltip>
      </div>);
};

export default levelShow;