import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, DatePicker} from 'material-ui-pickers';
import { DateRangePicker } from 'material-ui-datetime-range-picker';

const timeIntervalSelector = (props) => (
    <React.Fragment>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateRangePicker
            margin="normal"
            label="Date"
            value={props.value}
            onChange={props.change}
          />
          </MuiPickersUtilsProvider>
          </React.Fragment>
)


export default timeIntervalSelector