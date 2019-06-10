import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/AddCircle";

import classes from "./Toolbar.module.css";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <FormControl>
        <InputLabel htmlFor="student">Etudiant</InputLabel>
        <Select
          value={props.selectedStudent.email}
          onChange={props.change}
          name="student"
        >
          {props.students.map(student =>
            <MenuItem key={student.email} value={student.email}>
              {student.displayName}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        onClick={props.newFile}
      >
        <AddIcon className={classes.iconSmall} />
        Nouvelle fiche pour {props.selectedStudent.displayName}
      </Button>
    </div>
  );
};

export default Toolbar;
