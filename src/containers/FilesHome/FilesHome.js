import React, { Component } from "react";
import classes from "./FilesHome.module.css";

import FileSummary from "../../components/FileSummary/FileSummary";
import Toolbar from "./Toolbar/Toolbar";
import axios from "../../axios-instance";
import { Grid } from "@material-ui/core";

class FilesHome extends Component {
  state = {
    files: []
  };

  newFile() {
    const newFileGenerator = {
      sections: [
        {
          id: "0",
          title: "Commentaire Global",
          comment: "",
          edit: false
        }
      ],
      info: {
        date: new Date(),
        time: {
          start: "08:00",
          end: "20:00"
        },
        student: "Melvin Diez",
        instructor: "ABC",
        complexity: "",
        traffic: "",
        weather: "",
        windDirection: "",
        windSpeed: "",
        runways: ["17", "22"],
        positions: ["GND"],
        edit: false
      }
    };
    axios
      .post("/files.json", newFileGenerator)
      .then(res => {
        //res.data.name
        this.props.history.push("/files/" + res.data.name);
      })
      .catch(); //TODO: Error Management
  }

  componentWillMount() {
    axios
      .get("/files.json")
      .then(res => {
        const fileList = [];
        const values = Object.values(res.data);
        const keys = Object.keys(res.data);
        keys.forEach((key, i) => {
          fileList.push({
            id: key,
            ...values[i]
          });
        });
        this.setState({ files: fileList });
      })
      .catch();
  }

  render() {
    const summaries = this.state.files.map(sum => {
      let genCom = "";
      sum.sections.forEach(section => {
        if (section.id === "0") {
          genCom = section.comment;
        }
      });

      return (
        <FileSummary
          id={sum.id}
          date={sum.info.date}
          text={genCom}
          weather={sum.info.weather}
          complexity={sum.info.complexity}
          traffic={sum.info.traffic}
        />
      );
    });
    return (
      <Grid container spacing={16} className={classes.FilesHome}>
        <Grid item md={12} xs={12}>
          <Toolbar newFile={() => this.newFile()} />
        </Grid>
        <Grid item md={12} xs={12}>
          {summaries}
        </Grid>
      </Grid>
    );
  }
}

export default FilesHome;
