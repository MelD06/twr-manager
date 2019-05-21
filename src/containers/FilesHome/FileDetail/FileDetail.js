import React, { Component } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import classes from "./FileDetail.module.css";
import InfoFile from "../../../components/InfoFile/InfoFile";
import FileSectionComment from "../../../components/FileSectionComment/FileSectionComment";

class fileDetail extends Component {
  render() {
    return (
      <Grid
        container
        spacing={16}
        justify="center"
        className={classes.FileDetail}
      >
        {" "}<Grid key="3" item md={4} xs={12}>
          <InfoFile complexity="medium" />
        </Grid>
        <Grid key="2" item md={6} xs={12}>
          <FileSectionComment
            criterion="Releves"
            subtitle="Consignes, releve entrante & sortante"
            target="insufficient"
          />
          <FileSectionComment
            criterion="ATIS"
            subtitle="Consignes, releve entrante & sortante"
            target="progress"
          />
          <FileSectionComment
            criterion="Phaseo"
            subtitle="Consignes, releve entrante & sortante"
            target="ok"
          />
          <FileSectionComment
            criterion="Collationnement"
            subtitle="Ecoute, exigeance"
            target="ok"
          />
        </Grid>
      </Grid>
    );
  }
}

export default fileDetail;
