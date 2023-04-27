import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAi3Q7Wn-z73qGUB0QbdAiUGhKauIeliTg",
    authDomain: "twitter-clone-7e481.firebaseapp.com",
    projectId: "twitter-clone-7e481",
    storageBucket: "twitter-clone-7e481.appspot.com",
    messagingSenderId: "676836491662",
    appId: "1:676836491662:web:9fb8f3122e19cdd318e4df",
    measurementId: "G-PR1SJ77YLP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  export default db;