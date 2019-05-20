import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "./FileDetail.module.css";
import InfoFile from '../../../components/InfoFile/InfoFile';
import FileSectionComment from '../../../components/FileSectionComment/FileSectionComment';

class fileDetail extends Component {
  
  render() {
    return (
      <Grid container spacing={16} justify="center" className={classes.FileDetail}>
        <Grid key="2" item xs={6}>
          <FileSectionComment criterion="Releves" subtitle="Consignes, releve entrante & sortante" />
          <FileSectionComment criterion="ATIS" subtitle="Consignes, releve entrante & sortante" />
          <FileSectionComment criterion="Phaseo" subtitle="Consignes, releve entrante & sortante" />
          <FileSectionComment criterion="Collationnement" subtitle="Consignes, releve entrante & sortante" />
        </Grid>
        <Grid key="3" item xs={4}>
          <InfoFile />
        </Grid>
      </Grid>
    );
  }
}

export default fileDetail;
