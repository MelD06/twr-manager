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
    selectedStudent: Firebase.auth().currentUser.email,
    userRole: '',
    loaded: false
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
    Firebase.auth().currentUser.getIdTokenResult().then((user) => {
      return user.claims.role;
    }).then((curUserRole) => {
      if(curUserRole === 'admin' || curUserRole === 'instructor'){
        this.studentsF().then((students) => {
          this.setState({students: students.data, selectedStudent: students.data[0]});
          this.updateFileList(students.data[0].email)
        }).catch();
      } else {
        this.updateFileList(null);
      }
    })

  }

  onChangeStudent(event){
    const newStudent = this.state.students.filter(st => st.email === event.target.value);
    this.setState({selectedStudent: newStudent[0], loaded:false});
    this.updateFileList(newStudent[0]);
  }

  updateFileList(email){
    this.fileList({user: email}).then((res) => {
      console.log(res)
      this.setState({ files: res.data.files, loaded:true });
    });
  }

  render() {
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
    if(this.state.students !== [] && this.state.userRole !== 'student'){
      toolbar = <Toolbar newFile={() => this.newFile()} hasPower={this.state.isUserAdmin} students={this.state.students} change={(event) => this.onChangeStudent(event)} selectedStudent={this.state.selectedStudent} />;
    }

    if(!this.state.loaded){
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
          {summaries}
        </Grid>
      </Grid>
      </Slide>
      </React.Fragment>
    );
  }
}

export default FilesHome;
