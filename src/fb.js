import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBTaxx7rjQbJ_aKhFyOHRZv17EToSJi00U",
    authDomain: "todo-ninja-15d1e.firebaseapp.com",
    projectId: "todo-ninja-15d1e",
    storageBucket: "todo-ninja-15d1e.appspot.com",
    messagingSenderId: "1076398726662",
    appId: "1:1076398726662:web:48cb6dbbec116244336d87"
});

/* const firebaseConfig = {
    apiKey: "AIzaSyBTaxx7rjQbJ_aKhFyOHRZv17EToSJi00U",
    authDomain: "todo-ninja-15d1e.firebaseapp.com",
    projectId: "todo-ninja-15d1e",
    storageBucket: "todo-ninja-15d1e.appspot.com",
    messagingSenderId: "1076398726662",
    appId: "1:1076398726662:web:48cb6dbbec116244336d87"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig); */

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

const db = app.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;