import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const dateSelector = (props) => (
    <React.Fragment>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <MuiThemeProvider >
          <DatePicker
            margin="normal"
            label="Date"
            value={props.value}
            onChange={props.change}
          />
          </MuiThemeProvider>
          </MuiPickersUtilsProvider>
          </React.Fragment>
)


export default dateSelector