import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import FilesHome from "./containers/FilesHome/FilesHome";
import FileDetail from "./containers/FilesHome/FileDetail/FileDetail";
import Drawer from "./components/Drawer/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch, Redirect } from "react-router-dom";
import Firebase from "./firestore-instance";
import Spinner from './components/UI/Spinner/Spinner';

import Login from "./components/Login/Login";

class App extends Component {
  state = {
    connected: false,
    userInfo: [],
    loaded:false,
    navBarOpen:true
  };


  componentWillMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if(Firebase.auth().currentUser){
        Firebase.auth().currentUser.getIdToken(true)
        console.log(Firebase.auth().currentUser.getIdTokenResult());

      }
      if (user) {
        this.setState({
          connected: true,
          userInfo: user,
          loaded:true
        });
      } else {
        this.setState({
          loaded:true
        });
      }
    });
  }

  onDisconnect() {
    Firebase.auth().signOut();
    this.setState({
      connected: false,
      userInfo: []
    });
  }

  onNavBarToggle() {
    this.setState(prevState => ({
      navBarOpen: !prevState.navBarOpen
    }))
  }

  render() {
    let routes = <Route component={Login} />;
    if (this.state.connected) {
      routes = (
        <React.Fragment>
          <Route
            path={process.env.REACT_APP_PAGE_FILES}
            exact
            component={FilesHome}
          />
          <Route
            path={process.env.REACT_APP_PAGE_FILES + ":id"}
            component={FileDetail}
          /> <Route path='/' exact component={FilesHome} />
        </React.Fragment>
      );
    }

    let content = <Spinner />;
    if(this.state.loaded){
      content = ( <React.Fragment> <NavBar user={this.state.userInfo.email} disconnect={() => this.onDisconnect()} menuToggle={() => this.onNavBarToggle()}/>
      <main className="Content">
        <Switch>
          {routes}
        </Switch></main></React.Fragment>);
    }
    return (
      <div className="App">
        <CssBaseline />
        {this.state.connected && this.state.navBarOpen ? <Drawer /> : null}
        {content}

        
      </div>
    );
  }
}

export default App;
