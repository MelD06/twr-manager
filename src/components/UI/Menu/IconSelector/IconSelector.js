import React from "react";
import SmileyIcon from "../../Icons/SmileyIcon/SmileyIcon";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  OutlinedInput
} from "@material-ui/core";

import classes from './IconSelector.module.css';

const iconSelector = (props) => {
  const choices = ["ok", "progress", "insufficient"];

  const options = choices.map(choice =>
    <MenuItem key={props.id + "-" + choice} value={choice}>
      <SmileyIcon smiley={choice} />
    </MenuItem>
  );

  return (
    <div className={classes.IconSelector}>
      
      <FormControl variant="filled">
        <Select
          value={props.value}
          onChange={props.changeTarget}
          name="target"
          input={<OutlinedInput name="age" id="outlined-age-simple" />}
        >
          {options}
        </Select>
        <FormHelperText>Objectifs</FormHelperText>
      </FormControl>
    </div>
  );
};

export default iconSelector;
