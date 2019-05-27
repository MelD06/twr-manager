import React, { Component } from "react";
import classes from "./FilesHome.module.css";

import FileSummary from "../../components/FileSummary/FileSummary";
import Toolbar from "./Toolbar/Toolbar";
import Firebase from '../../firestore-instance';
import { Grid } from "@material-ui/core";

import 'firebase/firestore';

class FilesHome extends Component {
  db = Firebase.firestore();
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
        date: new Date().getTime(),
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

      this.db.collection('files').add(newFileGenerator).then((res) => {
        this.props.history.push("/files/" + res.id);
      }).catch(); //TODO: Error Management
  }

  componentWillMount() {
    
      this.db.collection('files').orderBy('info.date', 'desc').get().then(res => {
        const fileList = [];
        res.forEach((doc) => {
          fileList.push({
            id: doc.id,
            ...doc.data()
          });
        })
        this.setState({files:fileList})
        }).catch();
        //Get User Info
        Firebase.auth().onAuthStateChanged((user) => {
          console.log(user)
        })
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
          student={sum.info.student}
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
