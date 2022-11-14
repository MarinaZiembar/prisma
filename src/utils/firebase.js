import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCDcOPgxVFhCYclqZ_5ay2g2wNLvGBVvF0",
  authDomain: "prisma-2022.firebaseapp.com",
  projectId: "prisma-2022",
  storageBucket: "prisma-2022.appspot.com",
  messagingSenderId: "1054070769154",
  appId: "1:1054070769154:web:96e81731bf5053af25c91b",
  measurementId: "G-J2JRSJPQMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);