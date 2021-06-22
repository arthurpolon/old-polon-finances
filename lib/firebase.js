import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCd98j_1zYuxQERpMLmrx_4T1XF72JGER4',
  authDomain: 'polon-finances.firebaseapp.com',
  projectId: 'polon-finances',
  storageBucket: 'polon-finances.appspot.com',
  messagingSenderId: '80214809712',
  appId: '1:80214809712:web:cc2a0349450621dc6ba8b5',
  measurementId: 'G-J97ESQJSR1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auth, firebase, firebaseConfig, googleProvider };
