import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from "./containers/FilesHome/FileDetail/FileDetail";
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Drawer />
        <NavBar />
        <main className="Content">
        <Switch>
          <Route path="/files/" exact component={FilesHome} />
          <Route path="/files/:id" component={FileDetail} />

        </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
