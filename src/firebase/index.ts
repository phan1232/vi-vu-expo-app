import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Initialize Firebase

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUeB9zF5Nq7QfHQji_4Eoy0bCPnBe57LI",
  authDomain: "vivuhanoi-expo.firebaseapp.com",
  projectId: "vivuhanoi-expo",
  storageBucket: "vivuhanoi-expo.appspot.com",
  messagingSenderId: "467114169285",
  appId: "1:467114169285:web:8f478a9c213db65d8871ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDb = getFirestore(app);
export const firebaseStorage = getStorage(app);
export default app;
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
