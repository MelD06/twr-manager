import React from 'react';

import classes from './RunwayIcon.module.css';

const RunwayIcon = (props) => (
    <div className={classes.RunwayIcon}><span>{props.rwy}</span></div>
)

export default RunwayIcon;