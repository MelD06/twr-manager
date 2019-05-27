import React from "react";

import Firebase from '../../firestore-instance';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const Login = (props) => {

    const uiConfig = {
        signInSuccessUrl: '/',
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ]
      };

      return(<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={Firebase.auth()} />) 
}



export default Login;
