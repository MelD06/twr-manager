import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Markdown from "react-markdown";
import { Tooltip } from "@material-ui/core";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMde from "react-mde";
import Smiley from "../UI/Icons/SmileyIcon/SmileyIcon";

import EditIcon from "@material-ui/icons/Create";
import { IconButton, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import IconSelector from "../UI/Menu/IconSelector/IconSelector";

import classes from "./FileSectionComment.module.css";

const fileSectionComment = props => {
  //Managing the visuals in case of edition

  let output = (
    <Markdown source={props.comment} className={classes.CommentTypo} />
  );

  let tooltip = (
    <React.Fragment>
      <Tooltip title="Éditer">
        <IconButton aria-label="Edit" onClick={props.sectionToggleEdit}>
          <EditIcon />
        </IconButton>
      </Tooltip>
      {props.id === "0"
        ? null
        : <Tooltip title="Supprimer">
            <IconButton aria-label="Supprimer" onClick={props.sectionDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>}
    </React.Fragment>
  );

  let smiley = <Smiley smiley={props.target} />;

  if (props.edit) {
    output = (
      <React.Fragment>
        <ReactMde
          value={props.comment}
          onChange={props.sectionChange}
          className={classes.ReactMde}
        />
        <Button
          variant="contained"
          size="small"
          className={classes.button}
          onClick={props.sectionToggleEdit}
        >
          <SaveIcon className={classes.saveIcon} />
          Sauver
        </Button>
      </React.Fragment>
    );
    tooltip = null;
    smiley = props.id === '0' ? null : (
      <IconSelector
        value={props.target}
        changeTarget={props.sectionChangeTarget}
      />
    );
  }

  return (
    <Paper className={classes.FileSectionComment}>
      <Grid
        container
        spacing={16}
        justify="center"
        className={classes.FileSectionContainer}
      >
        <Grid key="Edit" item xs={2} className={classes.Tools}>
          {tooltip}
        </Grid>
        <Grid key="Headlines" item xs={7} className={classes.Headlines}>
          <Typography variant="h5" component="h3" className={classes.Headline}>
            {props.criterion}
            <br />
            <span className={classes.Subtitle}>
              {props.subtitle}
            </span>
          </Typography>
        </Grid>
        <Grid key="Targets" item xs={1}>
          {smiley}
        </Grid>
      </Grid>
      {output}
    </Paper>
  );
};

export default fileSectionComment;
