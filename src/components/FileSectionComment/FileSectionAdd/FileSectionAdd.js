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
  const options = props.allSections.filter(section => {
    if (props.usedSections.includes(section.sectionId)) {
      return false }
      return true}).map(section => {
      return (
        <MenuItem key={section.sectionId} value={section.sectionId}>
          {section.title}
        </MenuItem>
      );
    }
  );

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
  if (options.length === 0) {
    fileSectionUI = (<div className={classes.FileSectionAdd}>
    <p>Aucun élément à ajouter.</p>
    </div>);
  }
  console.log(options)
  return fileSectionUI;
};

export default fileSectionAdd;
