import React from 'react';
import {FormControl, InputLabel, Select, MenuItem, Chip, Input} from '@material-ui/core';

const MultiSelector = (props) => {
  let choices = [];
  let theSelection
  switch(props.type){
    case 'runways':
    choices = ['17', '35', '04', '22'];
    break;
    case 'positions':
    choices = ['SOL', 'COOR', 'LOC1', 'LOC2'];
    break;
    default:
    break;
  }
  //Corrects a crash if selection is empty
  theSelection = !props.selection ? [] : props.selection;

  return (
    <FormControl >
          <InputLabel htmlFor={props.type}>{props.type}</InputLabel>
          <Select
            multiple
            value={theSelection}
            onChange={props.change}
            input={<Input id={props.type} />}
            name={props.type}
            renderValue={choices => (
              <div>
                {choices.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </div>
            )}
          >
            {choices.map(name => (
              <MenuItem key={name} value={name} >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  )
}


export default MultiSelector

