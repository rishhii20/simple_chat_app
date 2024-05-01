// Import the functions you need from the SDKs you need
import  {initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
     apiKey: "AIzaSyCvxcPGdbKiYsEEXiAr_xhsvUOc2j5c1rs",
  authDomain: "chatbox-2057e.firebaseapp.com",
  projectId: "chatbox-2057e",
  storageBucket: "chatbox-2057e.appspot.com",
  messagingSenderId: "533052163156",
  appId: "1:533052163156:web:c1ecddd5607a7e298a19c1",
  measurementId: "G-28L38S5KW7"
  };

// Initialize Firebase
const app =initializeApp(firebaseConfig)

export default getFirestore(app);
