import React from 'react';
import {TextField} from '@material-ui/core';

const timeIntervalSelector = (props) => (
    <React.Fragment>
    <TextField
        id="beginTime"
        label="Début"
        type="time"
        defaultValue={props.start}
        onChange={props.change}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 10 min
        }}
      />
          <TextField
        id="endTime"
        label="Fin"
        type="time"
        defaultValue={props.end}
        onChange={props.change}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 600, // 10 min
        }}
      />
          </React.Fragment>
)


export default timeIntervalSelector