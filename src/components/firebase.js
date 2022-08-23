import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAvx_dVPxFfqnV69iMceQUHKMJ2E7Co3GU",
  authDomain: "clone-fac7c.firebaseapp.com",
  projectId: "clone-fac7c",
  storageBucket: "clone-fac7c.appspot.com",
  messagingSenderId: "143587007076",
  appId: "1:143587007076:web:17ac6a4bef940343429d71",
  measurementId: "G-DPDKJ2WW6T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };