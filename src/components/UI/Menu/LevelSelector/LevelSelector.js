import React from 'react';
import LevelIcon from '../../Icons/LevelIcon/LevelIcon';
import {Select, FormControl, FormHelperText, MenuItem} from '@material-ui/core';

const levelSelector = (props) => {
    const choices = ["very-low", "low", "medium", 'high', 'very-high'];

    const options = choices.map((choice) => {
        return <MenuItem key={choice} value={choice}> <LevelIcon level={choice} /></MenuItem>;
    })
    
    return ( 
    <div>
      <FormControl>
        <Select
          value={props.value}
          onChange={props.changeLevel}
          name={props.type}
        >
          {options}
        </Select>
        <FormHelperText>{props.helperText}</FormHelperText>
      </FormControl>
    </div>);
}

export default levelSelector;