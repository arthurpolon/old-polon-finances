import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyCd98j_1zYuxQERpMLmrx_4T1XF72JGER4",
  authDomain: "polon-finances.firebaseapp.com",
  projectId: "polon-finances",
  storageBucket: "polon-finances.appspot.com",
  messagingSenderId: "80214809712",
  appId: "1:80214809712:web:cc2a0349450621dc6ba8b5",
  measurementId: "G-J97ESQJSR1"
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export { db, firebase }