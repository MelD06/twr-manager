import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircle";

import classes from "./Toolbar.module.css";

const Toolbar = props => {

  let newButton = null;
  if(props.hasPower){
    newButton = (<Button variant="contained" size="small" className={classes.button} onClick={props.newFile}>
    <AddIcon className={classes.iconSmall} />
    Nouveau
  </Button>);
  }
  return (
  <div className={classes.Toolbar}>
        <FormControl >
          <InputLabel htmlFor="student">Etudiant</InputLabel>
          <Select
            value={props.selectedStudent}
            onChange={props.change}
            name="student"
          >
            {props.students.map(student => (
              <MenuItem key={student.email} value={student.email} >
                {student.displayName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
    {newButton}
</div>)
};

export default Toolbar;
