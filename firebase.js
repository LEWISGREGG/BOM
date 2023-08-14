import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBztlXri1wWKSSVQnqAPNjxsF2LscV4WAg",
  authDomain: "troubleshoot-chat.firebaseapp.com",
  projectId: "troubleshoot-chat",
  storageBucket: "troubleshoot-chat.appspot.com",
  messagingSenderId: "305855563032",
  appId: "1:305855563032:web:d81a9471894ac41d370a6d",
  measurementId: "G-K8KQSEV35R"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();


const storage = getStorage(app);

export {storage, db, auth, provider };

firebase.initializeApp(firebaseConfig);

export default firebase;