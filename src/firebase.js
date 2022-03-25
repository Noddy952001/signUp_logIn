
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA0Rrg7dsmpSfu4-9HiHsciTOmGS9kUOeM",
  authDomain: "react-contex.firebaseapp.com",
  projectId: "react-contex",
  storageBucket: "react-contex.appspot.com",
  messagingSenderId: "750033434209",
  appId: "1:750033434209:web:7442dc1f4c9036e0159c20",
  measurementId: "G-HEPH3WVN4B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


const analytics = getAnalytics(app);