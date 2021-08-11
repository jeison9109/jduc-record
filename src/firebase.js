import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJhjEVa-rWRqoRVOgrpz8TYUz-47ODfsg",
    authDomain: "jduc-records.firebaseapp.com",
    databaseURL: "https://jduc-records-default-rtdb.firebaseio.com",
    projectId: "jduc-records",
    storageBucket: "jduc-records.appspot.com",
    messagingSenderId: "163983979769",
    appId: "1:163983979769:web:13a50e5e37aa2a5a839e28",
    /*measurementId: "G-KPERGRNW8Z"*/
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;