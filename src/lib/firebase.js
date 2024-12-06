import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD8P5rvBgGEKk2Ax-3duyCfUOxncNqA2bY",
  authDomain: "hackathon-ec23b.firebaseapp.com",
  projectId: "hackathon-ec23b",
  storageBucket: "hackathon-ec23b.firebasestorage.app",
  messagingSenderId: "454197246685",
  appId: "1:454197246685:web:6ccf64df61eea879e0f934",
  measurementId: "G-Q6K09ZFH1L",
};

export const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
