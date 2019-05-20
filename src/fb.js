import firebase from 'firebase/app'
import 'firebase/firestore'

var config = { 
  apiKey: "AIzaSyBuQQbzg5K2Eg6-qYmPQjwSCo7jtBMrRJc", 
  authDomain: "probnik-1c5a3.firebaseapp.com", 
  databaseURL: "https://probnik-1c5a3.firebaseio.com", 
  projectId: "probnik-1c5a3", 
  storageBucket: "probnik-1c5a3.appspot.com", 
  messagingSenderId: "198843232636" 
}; 
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;