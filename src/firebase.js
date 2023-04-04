// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGU27bCcWMPrpu-R0Voy9StffKcj2WMdQ",
  authDomain: "quiz-app-f0fd9.firebaseapp.com",
  projectId: "quiz-app-f0fd9",
  storageBucket: "quiz-app-f0fd9.appspot.com",
  messagingSenderId: "855539635369",
  appId: "1:855539635369:web:fcaf653e349d3511c605b8",
  measurementId: "G-HH2ZT03JPM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);