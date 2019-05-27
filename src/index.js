import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/';
import Login from './containers/Login/Login';

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

const mainContainer = (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter >
    <Switch>
    <Route path={process.env.REACT_APP_PAGE_LOGIN} exact component={Login} />
<Route component={App} />
    </Switch>

    
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(mainContainer, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
