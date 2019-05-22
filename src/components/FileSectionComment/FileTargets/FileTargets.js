import React from "react";
import classes from "./FileTargets.module.css";

const fileTargets = props => {
  if(!props.target){
    return null;
  }
  let target = '';

  switch(props.target){
    case 'ok':
    target = ":)";
    break;
    case 'progress':
    target = ":|";
    break;
    case 'insufficient':
    target = ":(";
    break;
    default:
    break;
  }
  return (
    <div className={classes.FileTargets}>
      <span>{target}</span>
    </div>
  );
};

export default fileTargets;
