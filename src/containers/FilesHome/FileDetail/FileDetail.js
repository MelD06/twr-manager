import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import classes from "./FileDetail.module.css";
import InfoFile from "../../../components/InfoFile/InfoFile";
import FileSectionComment from "../../../components/FileSectionComment/FileSectionComment";
import FileSectionAdd from "../../../components/FileSectionComment/FileSectionAdd/FileSectionAdd";

const fileSections = [
  {
    sectionId: "1",
    title: "Relèves - Prise de Service",
    subtitle: "Consignes, relève entrante & sortante"
  },
  {
    sectionId: "2",
    title: "Equipements, connaissance, utilisation matériel",
    subtitle: "Radio - VIGIE - Balisage - Platine RDO/TEL"
  },
  {
    sectionId: "3",
    title: "ATIS",
    subtitle: "Utilisation de l'outil & des informations"
  },
  {
    sectionId: "4",
    title: "Tenue de strips et Tableau",
    subtitle: "Exploitation - Gestion - Soin"
  },
  {
    sectionId: "5",
    title: "Phraséologie",
    subtitle: "Français - Anglais - Anti-Incursion - Info de trafic"
  },
  {
    sectionId: "6",
    title: "Boucle de collationnement",
    subtitle: "Ecoute, vérification & exigence"
  },
  {
    sectionId: "7",
    title: "Respect règlementaire et consignes",
    subtitle: "Nationale - Manex - LOAs"
  },
  {
    sectionId: "8",
    title: "Connaissance Plateforme",
    subtitle: "HS - Parking - Moyens - Inspection de Piste"
  },
  {
    sectionId: "9",
    title: "Gestion des Régulations",
    subtitle: "CTOT - Vols Suspendus - Dialogue Nice"
  },
  {
    sectionId: "10",
    title: "Gestion des départs",
    subtitle: "Stratégie & Suivi - Mise en route"
  },
  {
    sectionId: "11",
    title: "Gestion des arrivées",
    subtitle: "Suivi & anticipation - Relations APP - OPS"
  },
  {
    sectionId: "12",
    title: "Gestion du Circuit",
    subtitle: " "
  },
  {
    sectionId: "13",
    title: "Changement de configuration",
    subtitle: "Anticipation - Actions"
  },
  {
    sectionId: "14",
    title: "Gestion des vols VFR",
    subtitle: "Plan de vol - Info de Trafic - VFR/S - VFR de nuit"
  },
  {
    sectionId: "15",
    title: "Surveillance aire de manoeuvre",
    subtitle: "Regarder Dehors"
  },
  {
    sectionId: "16",
    title: "Gestion des vols H",
    subtitle: "Plateforme - Quai du Large"
  },
  {
    sectionId: "17",
    title: "Situations Inhabituelles",
    subtitle: "Pannes - Vent Fort - FNE"
  },
  {
    sectionId: "18",
    title: "Détection des conflits",
    subtitle: " "
  }
];

class fileDetail extends Component {
  state = {
    sections: [],
    fileData: {
      sections: [
        {
          id: "0",
          title: "Commentaire Global",
          comment: "bla bla bla bla",
          edit: false
        },
        {
          id: "1",
          title: "Gestion des arrivées",
          subtitle: "Suivi & anticipation - Relations APP - OPS",
          comment: "bla bla bla bla",
          target: "ok",
          edit: false
        },
        {
          id: "2",
          title: "Gestion des Régulations",
          subtitle: "CTOT - Vols Suspendus - Dialogue Nice",
          comment: "bla bla bla sdsds",
          target: "progress",
          edit: false
        }
      ],
      generalComment: "dfkljadsfl",
      info: {
        date: "2019-01-01",
        time: "08H a 20H",
        student: "Melvin Diez",
        instructor: "ABC",
        complexity: "low",
        traffic: "low",
        weather: "cloudy",
        windDirection: "east",
        windSpeed: "low",
        runways: ["17", "35", "04"],
        positions: ["GND", "COOR", "LOC"]
      }
    }
  };

  onSectionEditHandler(id) {
    const newData = { ...this.state.fileData };
    const newSections = newData.sections.map(section => {
      if (section.id === id) {
        section.edit = !section.edit;
      }
      return section;
    });
    newData.sections = newSections;
    this.setState({
      fileData: newData
    });
  }

  onSectionChangeHandler(event, id) {
    const newData = { ...this.state.fileData };
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

  render() {
    const sections = this.state.fileData.sections.map(element => {
      return (
        <FileSectionComment
          key={element.id}
          criterion={element.title}
          subtitle={element.subtitle}
          target={element.target}
          comment={element.comment}
          edit={element.edit}
          sectionToggleEdit={() => this.onSectionEditHandler(element.id)}
          sectionChange={event =>
            this.onSectionChangeHandler(event, element.id)}
        />
      );
    });

    const usedIds = this.state.fileData.sections.map(element => {
      return [...Array(this.state.fileData.sections.length)].reduce(() => {
        return element.id;
      });
    });

    console.log(usedIds);
    return (
      <Grid
        container
        spacing={16}
        justify="center"
        className={classes.FileDetail}
      >
        <Grid key="3" item md={4} xs={12}>
          <InfoFile complexity="medium" data={this.state.fileData.info} />
        </Grid>
        <Grid key="2" item md={8} xs={12}>
          <Typography element="h3">
            Technique / Comportement 2 onglets
          </Typography>
          {sections}
          <FileSectionAdd allSections={fileSections} usedSections={usedIds} />
        </Grid>
      </Grid>
    );
  }
}

export default fileDetail;
