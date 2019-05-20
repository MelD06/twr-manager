import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import FileObjectives from './FileObjectives/FileTargets';
import Markdown from 'react-markdown';

import classes from "./FileSectionComment.module.css";

const fileSectionComment = props => {
  return (
    <Paper className={classes.FileSectionComment}>
      <Grid container spacing={16} justify="center">
        <Grid key="Headlines" item xs={9}     className={classes.Headlines}>
          <Typography
            variant="h5"
            component="h3"
            className={classes.Headline}
          >
            {props.criterion}
            <br />
            <span className={classes.Subtitle}>
              {props.subtitle}
            </span>
          </Typography>
        </Grid>
        <Grid key="Objectives" item xs={3} >
        <FileObjectives target='insufficient' />
        </Grid>
      </Grid>

      <Markdown source="## Markdown
      texte texte texte" />
    </Paper>
  );
};

export default fileSectionComment;
