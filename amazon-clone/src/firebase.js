import firebase from "firebase"

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyD3OeCocrKyosWV8RB-ZkDw7o89j7xEUIA",
    authDomain: "clone-b05b3.firebaseapp.com",
    databaseURL: "https://clone-b05b3.firebaseio.com",
    projectId: "clone-b05b3",
    storageBucket: "clone-b05b3.appspot.com",
    messagingSenderId: "570735635011",
    appId: "1:570735635011:web:c511d72888a8de002502f6",
    measurementId: "G-1NWGS1CXEW"


})

//const db = firebase.firestore()
const auth = firebase.auth()

//export { db, auth }
export { auth }