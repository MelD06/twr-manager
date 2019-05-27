import React, { Component } from "react";
import {
  Paper,
  Typography,
  InputLabel,
  Button,
  TextField,
  Grid
} from "@material-ui/core";

import Firebase from '../../firestore-instance';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import classes from './Login.module.css';

class Login extends Component {
    state = {
        signed:false
    }
    uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ]
      };

    componentDidMount(){
        Firebase.auth().onAuthStateChanged(user => {
            this.setState({signed:user});
        })
    }
  render() {
      return(<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={Firebase.auth()} />) 
//     return (
//       <Paper className={classes.Login}>
//       <Typography>Connexion</Typography>
//         <Grid container spacing={8} justify="space-between" className={classes.Input}>
//           <Grid cell xs={12} key="login" >
//             <TextField
//               required
//               id="email"
//               label="E-Mail"
//               placeholder="mail@aviation-civile.gouv.fr"
//               variant="outlined"
//             />
//           </Grid>
//           <Grid cell xs={12} key="Password" >
//             <TextField
//               required
//               id="email"
//               label="Mot de Passe"
//               placeholder="mail@aviation-civile.gouv.fr"
//               variant="outlined"
//             />
//           </Grid>
//           <Grid cell xs={12} key="Ok">
// <Button>Connexion</Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     );
  }
}



export default Login;
