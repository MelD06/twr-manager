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
    const studentsF = Firebase.functions().httpsCallable('getStudents');

    studentsF().then((students) => {

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
        Firebase.auth().currentUser.getIdTokenResult().then((tokenResult) => {
          this.setState({
            isUserAdmin:tokenResult.claims.admin});
        });
      
      this.setState({students: students.data, selectedStudent: students.data[0]});
      
    });
      

  }

  onChangeStudent(event){
    const newStudent = this.state.students.filter(st => st.email === event.target.value);
    this.setState({selectedStudent: newStudent[0]})
    console.log(newStudent)
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
          key={sum.id}
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
