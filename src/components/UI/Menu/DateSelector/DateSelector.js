import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';

const dateSelector = (props) => (
    <React.Fragment>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            margin="normal"
            label="Date"
            value={props.value}
            onChange={props.change}
          />
          </MuiPickersUtilsProvider>
          </React.Fragment>
)


export default dateSelector