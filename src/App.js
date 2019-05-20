import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from './components/FileDetail/FileDetail';
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <CssBaseline />
      <Drawer />
      <NavBar />
        <main className="Content">
          <Route path="/files/" component={FilesHome} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
