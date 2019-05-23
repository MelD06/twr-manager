import React from "react";
import WeatherIcon from "../../Icons/WeatherIcon/WeatherIcon";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";


const weatherSelector = (props) => {
  const choices = ["sunny", "cloudy", "stormy"];

  const options = choices.map(choice =>
    <MenuItem key={choice} value={choice}>
      <WeatherIcon weather={choice} />
    </MenuItem>
  );

  return (
    <div>
      <FormControl>
        <Select
          value={props.value}
          onChange={props.changeWeather}
          name="weather"
        >
          {options}
        </Select>
        <FormHelperText>Météo</FormHelperText>
      </FormControl>
    </div>
  );
};

export default weatherSelector;
