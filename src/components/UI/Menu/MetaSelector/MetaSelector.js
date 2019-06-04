

import React from 'react';
import {FormControl, Select, MenuItem} from '@material-ui/core';

/**************
 * Multi purpose selector
 * requires: 
 * - props.choices
 * - props.change
 * - props.selection
 * - props.name
 * - props.type
 */

const MetaSelector = (props) => {
  return (
          <Select
            value={props.selection}
            onChange={props.change}
            name={props.name}
          >
            {props.choices.map(choice => (
              <MenuItem key={choice[0]} value={choice[0]} >
                {choice[1]}
              </MenuItem>
            ))}
          </Select>
  )
}


export default MetaSelector