import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebase = {
    apiKey: "AIzaSyA3s4w5cTbh_rbL-m_IRMgqNt6E7rNvGxw",
    authDomain: "twr-manager.firebaseapp.com",
    databaseURL: "https://twr-manager.firebaseio.com",
    projectId: "twr-manager",
    storageBucket: "twr-manager.appspot.com",
    messagingSenderId: "264050265096",
    appId: "1:264050265096:web:885c318558552367"
  };

  const Firebase = app.initializeApp(firebase);

export default Firebase;