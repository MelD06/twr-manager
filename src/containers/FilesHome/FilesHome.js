import React, { Component } from "react";
import classes from "./FilesHome.module.css";

import FileSummary from "../../components/FileSummary/FileSummary";
import Toolbar from "./Toolbar/Toolbar";
import Firebase from '../../firestore-instance';
import { Grid, Slide } from "@material-ui/core";
import Spinner from '../../components/UI/Spinner/Spinner';

import 'firebase/firestore';




class FilesHome extends Component {
  db = Firebase.firestore();
  //Backend calls resolving admin privileges and student list
  fileList = Firebase.functions().httpsCallable('getFileList');
  studentsF = Firebase.functions().httpsCallable('getStudents');
  state = {
    files: [],
    students: [],
    selectedStudent: null,
    isUserAdmin: false
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
        student: this.state.selectedStudent.displayName,
        instructor: Firebase.auth().currentUser.displayName,
        complexity: "",
        traffic: "",
        weather: "",
        windDirection: "",
        windSpeed: "",
        runways: ["17", "22"],
        positions: ["SOL"],
        edit: false
      }
    };

      this.db.collection('files').add(newFileGenerator).then((res) => {
        this.props.history.push("/files/" + res.id);
      }).catch(); //TODO: Error Management


  }

  componentDidMount() {
    this.fileList().then((res) => {
      this.setState({isUserAdmin: res.data.hasPower, files: res.data.files});
      console.log(res);
      if(res.data.hasPower){
        this.studentsF().then((students) => {
          this.setState({students: students.data, selectedStudent: students.data[0]});
        });
    
      }
    });
  }

  onChangeStudent(event){
    const newStudent = this.state.students.filter(st => st.email === event.target.value);
    this.setState({selectedStudent: newStudent[0]})
    this.fileList({user: this.state.selectedStudent.email}).then((res) => {
      this.setState({ files: res.data.files });
    });
    console.log(newStudent)
  }

  render() {
    console.log(this.state.files);
    const summaries = this.state.files.map(sum => {

      return (
        <FileSummary
          key={sum.id}
          id={sum.id}
          date={sum.info.date}
          text={sum.genComment}
          weather={sum.info.weather}
          complexity={sum.info.complexity}
          traffic={sum.info.traffic}
          instructor={sum.info.instructor}
        />
      );
    });

    let toolbar = null;
    if(this.state.students){
      toolbar = <Toolbar newFile={() => this.newFile()} hasPower={this.state.isUserAdmin} students={this.state.students} change={(event) => this.onChangeStudent(event)} selectedStudent={this.state.selectedStudent} />;
    }

    if(this.state.files === [] || this.state.selectedStudent === null){
      return <Spinner />;
    } 
    return (
      <React.Fragment>
      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
      <Grid container spacing={16} className={classes.FilesHome}>
        <Grid item md={12} xs={12}>
        {toolbar}
         </Grid>
        <Grid item md={12} xs={12}>
          {summaries ? summaries : <Spinner />}
        </Grid>
      </Grid>
      </Slide>
      </React.Fragment>
    );
  }
}

export default FilesHome;
