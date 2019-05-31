

import React from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

/**************
 * Multi purpose selector
 * requires: 
 * - props.choicesValues 
 * - props.choicesNames
 * - props.change
 * - props.selection
 * - props.type
 */

const MetaSelector = (props) => {
  let theSelection;
  //Corrects a crash if selection is empty
  theSelection = props.selection ? props.selection : null ;

  const choices = props.choicesNames.map((el, i) => [el, props.choicesValues[i]]);

  return (
    <FormControl >
          <InputLabel htmlFor={props.type}>{props.type}</InputLabel>
          <Select
            value={theSelection}
            onChange={props.change}
            name={props.type}
          >
            {choices.map(choice => (
              <MenuItem key={choice[1]} value={choice[1]} >
                {choice[0]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
  )
}


export default MetaSelector