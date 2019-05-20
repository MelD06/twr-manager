import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import classes from './FileDetail.module.css';

const fileDetail = () => (
        <Grid container spacing={16} justify="center">
        <Grid key='1' item>
                <Paper className={classes.Paper}/>
                tretertert
              </Grid>
              <Grid key='2' item>
                <Paper className={classes.Paper} />
              </Grid>
              <Grid key='3' item>
                <Paper className={classes.Paper} />
              </Grid>
        </Grid>
    );

export default fileDetail;