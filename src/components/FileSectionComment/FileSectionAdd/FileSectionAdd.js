import React from "react";
import classes from "./FileSectionAdd.module.css";
import AddIcon from "@material-ui/icons/Add";
import {
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Button
} from "@material-ui/core";

const fileSectionAdd = props => {
  const options = props.allSections.map(section => {
    if (!props.usedSections.includes(section.sectionId)) {
      return (
        <MenuItem key={section.sectionId} value={section.sectionId}>
          {section.title}
        </MenuItem>
      );
    }
    return null;
  });

  let fileSectionUI = (
    <div className={classes.FileSectionAdd}>
      <FormControl>
        <Select
          value={props.sectionToAdd}
          onChange={props.sectionToAddChange}
          name="section"
          displayEmpty
        >
          {options}
        </Select>
        <FormHelperText>Nouvelle Rubrique</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        onClick={props.onAdd}
      >
        <AddIcon className={classes.addIcon}  />
        Ajouter
      </Button>
    </div>
  );
  if (options === null) {
    fileSectionUI = null;
  }

  return fileSectionUI;
};

export default fileSectionAdd;
