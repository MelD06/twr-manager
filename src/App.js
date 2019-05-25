import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from "./containers/FilesHome/FileDetail/FileDetail";
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Arial",
      "sans-serif"
    ].join(","),
    useNextVariants: true
  }
  });

function App() {
  console.log(process.env)
  return (
    <MuiThemeProvider theme={theme} >
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <Drawer />
        <NavBar />
        <main className="Content">
        <Switch>
          <Route path={process.env.REACT_APP_PAGE_FILES} exact component={FilesHome} />
          <Route path={process.env.REACT_APP_PAGE_FILES + ":id"} component={FileDetail} />

        </Switch>
        </main>
      </BrowserRouter>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
