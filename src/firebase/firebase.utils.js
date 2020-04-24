import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config={
    apiKey: "AIzaSyCNV1LqESQoLi9qtYa_lB1JCNMF101_NWo",
    authDomain: "crwn-clothing-481e6.firebaseapp.com",
    databaseURL: "https://crwn-clothing-481e6.firebaseio.com",
    projectId: "crwn-clothing-481e6",
    storageBucket: "crwn-clothing-481e6.appspot.com",
    messagingSenderId: "320302818098",
    appId: "1:320302818098:web:d35f96f56e7f28f587ad2b",
    measurementId: "G-9N4YVP3K2E"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;