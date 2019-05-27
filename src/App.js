import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from "./containers/FilesHome/FileDetail/FileDetail";
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router-dom";
import Firebase from "./firestore-instance";

import Login from "./components/Login/Login";

function App() {
  let connected = null;
  Firebase.auth().onAuthStateChanged(user => connected = user);

  return (
    <div className="App">
      <CssBaseline />
      <Drawer />
      <NavBar />
      <main className="Content">
        <Switch>
          {/* {connected
            ? <React.Fragment> */}
                <Route
                  path={process.env.REACT_APP_PAGE_FILES}
                  exact
                  component={FilesHome}
                />
                <Route
                  path={process.env.REACT_APP_PAGE_FILES + ":id"}
                  component={FileDetail}
                />
                <Route
                exact
                  render={() => <h1>Connecté</h1>}
                />
              {/* </React.Fragment>
            : <Route
            component={Login}
          />} */}
          
        </Switch>
      </main>
    </div>
  );
}

export default App;
