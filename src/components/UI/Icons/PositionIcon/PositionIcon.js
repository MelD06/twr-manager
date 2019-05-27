import React from 'react';

import classes from './PositionIcon.module.css';

const PositionIcon = (props) => {
    const styles = [classes.PositionIcon, classes[props.position]].join(' ');
   return(
    <div className={styles}><span className={classes.PositionText}>{props.position}</span></div>);
}

export default PositionIcon;