import * as firebase from  'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBQV7E9h6C8NUaXMboSjlOsbv43d3RN_GM",
    authDomain: "react-firestore-d579f.firebaseapp.com",
    databaseURL: "https://react-firestore-d579f.firebaseio.com",
    projectId: "react-firestore-d579f",
    storageBucket: "react-firestore-d579f.appspot.com",
    messagingSenderId: "611715993704"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings(settings);

  export default firebase;