import React, { Component } from "react";
import { Grid, Tabs, Tab, Slide, Paper, Button } from "@material-ui/core";
import classes from "./FileDetail.module.css";
import InfoFile from "../../../components/InfoFile/InfoFile";
import FileSectionComment from "../../../components/FileSectionComment/FileSectionComment";
import FileSectionAdd from "../../../components/FileSectionComment/FileSectionAdd/FileSectionAdd";
import DeleteDialog from "../../../hoc/DeleteDialog/DeleteDialog";
import BackIcon from "@material-ui/icons/ArrowBackIos";

import "firebase/firestore";
import Firebase from "../../../firestore-instance";

const fileSections = [
  {
    sectionId: "1",
    title: "Relèves - Prise de Service",
    subtitle: "Consignes, relève entrante & sortante",
    type: 'technique'
  },
  {
    sectionId: "2",
    title: "Equipements, connaissance, utilisation matériel",
    subtitle: "Radio - VIGIE - Balisage - Platine RDO/TEL",
    type: 'technique'
  },
  {
    sectionId: "3",
    title: "ATIS",
    subtitle: "Utilisation de l'outil & des informations",
    type: 'technique'
  },
  {
    sectionId: "4",
    title: "Tenue de strips et Tableau",
    subtitle: "Exploitation - Gestion - Soin",
    type: 'technique'
  },
  {
    sectionId: "5",
    title: "Phraséologie",
    subtitle: "Français - Anglais - Anti-Incursion - Info de trafic",
    type: 'technique'
  },
  {
    sectionId: "6",
    title: "Boucle de collationnement",
    subtitle: "Ecoute, vérification & exigence",
    type: 'technique'
  },
  {
    sectionId: "7",
    title: "Respect règlementaire et consignes",
    subtitle: "Nationale - Manex - LOAs",
    type: 'technique'
  },
  {
    sectionId: "8",
    title: "Connaissance Plateforme",
    subtitle: "HS - Parking - Moyens - Inspection de Piste",
    type: 'technique'
  },
  {
    sectionId: "9",
    title: "Gestion des Régulations",
    subtitle: "CTOT - Vols Suspendus - Dialogue Nice",
    type: 'technique'
  },
  {
    sectionId: "10",
    title: "Gestion des départs",
    subtitle: "Stratégie & Suivi - Mise en route",
    type: 'technique'
  },
  {
    sectionId: "11",
    title: "Gestion des arrivées",
    subtitle: "Suivi & anticipation - Relations APP - OPS",
    type: 'technique'
  },
  {
    sectionId: "12",
    title: "Gestion du Circuit",
    subtitle: " ",
    type: 'technique'
  },
  {
    sectionId: "13",
    title: "Changement de configuration",
    subtitle: "Anticipation - Actions",
    type: 'technique'
  },
  {
    sectionId: "14",
    title: "Gestion des vols VFR",
    subtitle: "Plan de vol - Info de Trafic - VFR/S - VFR de nuit",
    type: 'technique'
  },
  {
    sectionId: "15",
    title: "Surveillance aire de manoeuvre",
    subtitle: "Regarder Dehors",
    type: 'technique'
  },
  {
    sectionId: "16",
    title: "Gestion des vols H",
    subtitle: "Plateforme - Quai du Large",
    type: 'technique'
  },
  {
    sectionId: "17",
    title: "Situations Inhabituelles",
    subtitle: "Pannes - Vent Fort - FNE",
    type: 'technique'
  },
  {
    sectionId: "18",
    title: "Détection des conflits",
    subtitle: " ",
    type: 'technique'
  },
  {
    sectionId: "19",
    title: "Section Comportement",
    subtitle: "sub",
    type: 'comportement'
  }
];

class fileDetail extends Component {
  db = Firebase.firestore();
  emailToName = Firebase.functions().httpsCallable('emailToName');
  state = {
    sectionToAdd: "",
    sections: [],
    currentType: 'technique',
    aboutToDelete: false,
    studentName: '',
    fileData: {
      sections: [],
      info: {
        date: new Date(),
        time: {
          start: new Date(),
          end: new Date()
        },
        student: "Melvin Diez",
        instructor: "ABC",
        complexity: "low",
        traffic: "low",
        weather: "cloudy",
        windDirection: "east",
        windSpeed: "low",
        runways: ["17", "35", "04"],
        positions: ["GND", "COOR", "LOC"],
        edit: false
      }
    },
    isUserAdmin: false
  };

  componentWillMount() {
      const getFile = Firebase.functions().httpsCallable('getFile');
      getFile({file: this.props.match.params.id}).then(res => {
        console.log('getFile Called');
        this.emailToName({email: res.data.info.student}).then(name => {
          this.setState({
            studentName: name.data,
            fileData: res.data
          })
        }).catch();
        });

    //Get User Info
    Firebase.auth()
      .currentUser.getIdTokenResult()
      .then(tokenResult => {
        this.setState({
          isUserAdmin: tokenResult.claims.admin
        });
      });
  }

  doSaveHandler(newData) {
    this.db
      .collection("files")
      .doc(this.props.match.params.id)
      .set({ ...newData })
      .then(res => {
        console.log(res);
      })
      .catch({});
  }

  // TAB MANAGEMENT
  //
  //
  //
  ////////////////////////

  onTabChangeHandler(event) {
    this.setState({currentType: event.target.textContent});
  }

  // SECTION HANDLERS
  //
  //
  //
  // /////////////////////////

  onSectionEditHandler(id) {
    const newData = { ...this.state.fileData };
    let status = true;
    const newSections = newData.sections.map(section => {
      if (section.id === id) {
        section.edit = !section.edit;
        status = section.edit;
      }
      return section;
    });
    newData.sections = newSections;
    this.setState({
      fileData: newData
    });
    if (!status) {
      this.doSaveHandler(newData);
    }
  }

  onSectionChangeHandler(event, id) {
    const newState = { ...this.state };
    const newData = { ...newState.fileData };
    const newSections = newData.sections.map(section => {
      if (section.id === id) {
        section.comment = event;
      }
      return section;
    });
    newData.sections = newSections;
    this.setState({
      fileData: newData
    });
  }

  onSectionToAddChangeHandler(event) {
    this.setState({
      sectionToAdd: event.target.value
    });
  }

  onAddSectionDoHandler() {
    if (this.state.sectionToAdd === "") {
      return false; //TODO: Error management
    } else {
      const newData = { ...this.state.fileData };
      let sectionData = [];
      fileSections.forEach(section => {
        if (section.sectionId === this.state.sectionToAdd) {
          sectionData = section;
        }
      });

      const newSection = {
        id: this.state.sectionToAdd,
        title: sectionData.title,
        subtitle: sectionData.subtitle,
        type: sectionData.type,
        comment: "",
        target: "ok",
        edit: true
      };
      newData.sections.push(newSection);

      this.setState({
        currentType: sectionData.type,
        fileData: newData
      });
    }
  }

  onSectionDelete(id) {
    const newData = { ...this.state.fileData };
    const newSections = newData.sections.filter(section => section.id !== id);
    newData.sections = newSections;
    this.setState({
      fileData: newData
    });
  }

  onSectionChangeTarget(id, event) {
    const newData = { ...this.state.fileData };
    const newSections = newData.sections.map(section => {
      if (section.id === id) {
        section.target = event.target.value;
      }
      return section;
    });

    newData.sections = newSections;
    this.setState({
      fileData: newData
    });
  }

  // FILE-INFO HANDLERS
  //
  //
  //
  // /////////////////////////

  onInfoEditHandler() {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    newInfo.edit = !newInfo.edit;
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
    if (!newInfo.edit) {
      this.doSaveHandler(newData);
    }
  }

  onInfoLevelChangeHandler(event) {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    if (event.target.name === "complexity") {
      newInfo.complexity = event.target.value;
    } else if (event.target.name === "traffic") {
      newInfo.traffic = event.target.value;
    }
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
  }

  onInfoChangeHandler(event) {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    newInfo[event.target.name] = event.target.value;
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
  }

  onInfoDateChangeHandler(event) {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    newInfo.date = event.getTime();
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
  }

  onInfoTimeChangeHandler(event) {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    if (event.target.id === "beginTime") {
      newInfo.time.start = event.target.value;
    } else if (event.target.id === "endTime") {
      newInfo.time.end = event.target.value;
    }
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
  }

  onInfoMultiChangeHandler(event) {
    const newData = { ...this.state.fileData };
    const newInfo = { ...newData.info };
    newInfo[event.target.name] = event.target.value;
    newData.info = newInfo;
    this.setState({
      fileData: newData
    });
  }
  onAbouttoDeleteHandler() {
    this.setState(prevState => ({ aboutToDelete: !prevState.aboutToDelete }));
  }

  onDeleteHandler() {
    this.db
      .collection("files")
      .doc(this.props.match.params.id)
      .delete()
      .then(() => {
        this.props.history.push("/files/");
      })
      .catch({}); //Error Management
  }


  render() {
    //Checks if value exists in database
    if (!this.state.fileData) {
      return <h1> Fiche inexistante. </h1>; //Moche
    }

    const sections = this.state.fileData.sections.map(element => {
      if(this.state.currentType === element.type){
        return (
          <FileSectionComment
            key={element.id}
            id={element.id}
            criterion={element.title}
            subtitle={element.subtitle}
            target={element.target}
            comment={element.comment}
            edit={element.edit}
            hasPower={this.state.isUserAdmin}
            sectionToggleEdit={() => this.onSectionEditHandler(element.id)}
            sectionDelete={() => this.onSectionDelete(element.id)}
            sectionChange={event =>
              this.onSectionChangeHandler(event, element.id)}
            sectionChangeTarget={event =>
              this.onSectionChangeTarget(element.id, event)}
          />
        );
      } else {
        return null;
      }
    });

    let deleteDialog = (
      <DeleteDialog
        cancelDelete={() => this.onAbouttoDeleteHandler()}
        doDelete={() => this.onDeleteHandler()}
        what="cette fiche"
      />
    );
    if (!this.state.aboutToDelete) {
      deleteDialog = null;
    }

    const usedIds = this.state.fileData.sections.map(element => {
      return [...Array(this.state.fileData.sections.length)].reduce(() => {
        return element.id;
      });
    });

    let fileSectionAdd = (
      <FileSectionAdd
        allSections={fileSections}
        usedSections={usedIds}
        sectionToAdd={this.state.sectionToAdd}
        onAdd={() => this.onAddSectionDoHandler()}
        sectionToAddChange={event => this.onSectionToAddChangeHandler(event)}
      />
    );

    if (!this.state.isUserAdmin) {
      fileSectionAdd = null;
    }
    return (
      <React.Fragment>
        {deleteDialog}
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <Grid container spacing={16} className={classes.FileDetail}>
            <Grid key="3" item md={4} xs={12}>
              <InfoFile
                data={this.state.fileData.info}
                onEditToggle={() => this.onInfoEditHandler()}
                onDateChange={event => this.onInfoDateChangeHandler(event)}
                onLevelChange={event => this.onInfoChangeHandler(event)}
                onWeatherChange={event => this.onInfoChangeHandler(event)}
                onTimeChange={event => this.onInfoTimeChangeHandler(event)}
                onMultiChange={event => this.onInfoMultiChangeHandler(event)}
                onDelete={() => this.onAbouttoDeleteHandler()}
                hasPower={this.state.isUserAdmin}
              />
            </Grid>
            <Grid key="2" item md={7} xs={12}>
              <Paper square elevation={10}>
                <Tabs
                  value={this.state.currentType}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={(event) => this.onTabChangeHandler(event)}
                >
                  <Tab label="technique" value="technique"/>
                  <Tab label="comportement" value="comportement"/>
                </Tabs>
                {sections}
              </Paper>
              {fileSectionAdd}
            </Grid>
            <Grid key="back" item md={1} xs={12}>
              <Button
                size="small"
                onClick={() =>
                  this.props.history.push(process.env.REACT_APP_PAGE_FILES)}
              >
                <BackIcon />
              </Button>
            </Grid>
          </Grid>
        </Slide>
      </React.Fragment>
    );
  }
}

export default fileDetail;
