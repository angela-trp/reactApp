import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCt9wg-gngtptQ70EN1c-iecIUTeLe5ORo",
  authDomain: "test-3b53c.firebaseapp.com",
  databaseURL: "https://test-3b53c.firebaseio.com",
  projectId: "test-3b53c",
  storageBucket: "test-3b53c.appspot.com",
  messagingSenderId: "67509871087",
  appId: "1:67509871087:web:115fefcb20e48cd7c4161a"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(app);

export { app, db };
