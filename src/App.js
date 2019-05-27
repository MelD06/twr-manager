import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from "./containers/FilesHome/FileDetail/FileDetail";
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";



function App() {

  return (
    <div className="App">
        <CssBaseline />
        <Drawer />
        <NavBar />
        <main className="Content">
        <Switch>
          <Route path={process.env.REACT_APP_PAGE_FILES} exact component={FilesHome} />
          <Route path={process.env.REACT_APP_PAGE_FILES + ":id"} component={FileDetail} />

        </Switch>
        </main>
    </div>
  );
}

export default App;
