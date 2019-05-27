import React from "react";

import Firebase from '../../firestore-instance';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const Login = () => {

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
