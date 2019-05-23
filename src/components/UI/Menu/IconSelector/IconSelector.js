import React from "react";
import SmileyIcon from "../../Icons/SmileyIcon/SmileyIcon";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
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
      <FormControl>
        <Select
          value={props.value}
          onChange={props.changeTarget}
          name="target"
        >
          {options}
        </Select>
        <FormHelperText>Objectifs</FormHelperText>
      </FormControl>
    </div>
  );
};

export default iconSelector;
