import React, { Component } from "react";
import classes from "./FilesHome.module.css";
import { Route } from 'react-router-dom';
import FileDetail from './FileDetail/FileDetail';
 
import FileSummary from "../../components/FileSummary/FileSummary";
import Toolbar from "./Toolbar/Toolbar";

class FilesHome extends Component {
  state = {
    files: [
      {
        id: "1",
        date: "25/09/2019",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        weather: "cloudy",
        complexity: "low",
        traffic: "medium"
      },
      {
        id: "2",
        date: "24/09/2019",
        text:
          "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        weather: "stormy",
        complexity: "medium",
        traffic: "low"
      },
      {
        id: "3",
        date: "15/08/2019",
        text:
          "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        weather: "sunny",
        complexity: "medium",
        traffic: "medium"
      },
      {
        id: "4",
        date: "25/09/2019",
        text: "sunt in culpa qui officia deserunt mollit anim id est laborum.",
        weather: "sunny",
        complexity: "high",
        traffic: "high"
      }
    ]
  };

  render() {
    const summaries = this.state.files.map(sum => {
      return (
        <FileSummary
          id={sum.id}
          date={sum.date}
          text={sum.text}
          weather={sum.weather}
          complexity={sum.complexity}
          traffic={sum.traffic}
        />
      );
    });
    return (
      <div className={classes.FilesHome}>
        <Toolbar />
        {summaries}
        <Route path="/:id" component={FileDetail} />
      </div>
    );
  }
}

export default FilesHome;
