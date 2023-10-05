import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpBkdAMQ6VxKcslGLtE6eDiypS6MMgGfY",
  authDomain: "ntwitter-ca6e8.firebaseapp.com",
  projectId: "ntwitter-ca6e8",
  storageBucket: "ntwitter-ca6e8.appspot.com",
  messagingSenderId: "933799745701",
  appId: "1:933799745701:web:c803219cdf605dd7eb554c",
  measurementId: "G-75YD3QGSXW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
