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
    <div className={classes.TooltipOrganizer} >
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
    </div>
  );

  let smiley = <Smiley smiley={props.target} />;

  if (props.edit) {
    output = (
      <React.Fragment>
        <ReactMde
          value={props.comment}
          onChange={props.sectionChange}
          className={classes.ReactMde}
          //TODO: ReactMde state is controlled, should be implemented see https://github.com/andrerpena/react-mde/issues/162
          //generateMarkdownPreview={markdown => <Markdown source={markdown} className={classes.CommentTypo} /> }
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
    smiley =
      props.id === "0"
        ? null
        : <IconSelector
            value={props.target}
            changeTarget={props.sectionChangeTarget}
          />;
  }

  if (!props.hasPower) {
    tooltip = null;
  }

  return (
    <Paper className={classes.FileSectionComment}>
      <Grid
        container
        spacing={16}
        justify="center"
        className={classes.FileSectionContainer}
      >
        <Grid key="Edit" item xs={3} className={classes.Tools}>
          {tooltip}
        </Grid>
        <Grid key="Headlines" item xs={6} className={classes.Headlines}>
          <Typography variant="h5" component="h3" className={classes.Headline}>
            {props.criterion}
            <br />
            <span className={classes.Subtitle}>
              {props.subtitle}
            </span>
          </Typography>
        </Grid>
        <Grid key="Targets" item xs={3}>
          {smiley}
        </Grid>
      </Grid>
      {output}
    </Paper>
  );
};

export default fileSectionComment;
