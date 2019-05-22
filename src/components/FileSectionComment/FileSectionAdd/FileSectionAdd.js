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
        <MenuItem value={section.id}>
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
          value={null}
          onChange={null}
          name="section"
          displayEmpty
          className={classes.selectEmpty}
        >
          {options}
        </Select>
        <FormHelperText>Nouvelle Rubrique</FormHelperText>
      </FormControl>
      <Button
        variant="contained"
        size="small"
        className={classes.button}
        onClick={props.sectionToggleEdit}
      >
        <AddIcon className={classes.addIcon} />
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
