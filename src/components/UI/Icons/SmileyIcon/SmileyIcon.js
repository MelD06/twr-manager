import React from "react";
import classes from './SmileyIcon.module.css';
import classNames from 'classnames';

// Made using codepen.io/mauryaratan/pen/jdBAo

const smileyIcon = props => {
    let smiley = classes.smileygreen;
  switch (props.smiley) {
    case "ok":
    smiley = classes.smileygreen;
      break;
    case "progress":
    smiley = classes.smileyyellow;
      break;
    case "insufficient":
    smiley = classes.smileyred;
      break;
    default:
        return (null);
  }

  return (
      <div id={classes.wrapper}>
      <div className={classNames(classes.floatleft, smiley)}>
        <div className={classes.lefteye}></div>
        <div className={classes.righteye}></div>
        <div className={classes.smile}></div>
      </div>
      </div>
  )
};

export default smileyIcon;
