import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZ1pnWzDAyVwRaM-93qEb5kL9ad6eH1V0",
  authDomain: "arta-14291.firebaseapp.com",
  databaseURL: "https://arta-14291-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "arta-14291",
  storageBucket: "arta-14291.appspot.com",
  messagingSenderId: "995849798653",
  appId: "1:995849798653:web:aaa039d4b170ac828bcf94",
  measurementId: "G-EJ2DGNX0Z5"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);