import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHig7lrCFks0NHE4ixp3GqRJUtcNZ-gC8",
  authDomain: "nextjs-firebase-906c5.firebaseapp.com",
  projectId: "nextjs-firebase-906c5",
  storageBucket: "nextjs-firebase-906c5.appspot.com",
  messagingSenderId: "518926918976",
  appId: "1:518926918976:web:6eeaaefeafebec35f6c6a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}