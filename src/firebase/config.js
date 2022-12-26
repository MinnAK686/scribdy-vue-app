import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfy2dzH5TIzH7UsFjHSpzwJP3Ain6pqgU",
  authDomain: "scribdy-abef9.firebaseapp.com",
  projectId: "scribdy-abef9",
  storageBucket: "scribdy-abef9.appspot.com",
  messagingSenderId: "825830936999",
  appId: "1:825830936999:web:b11880452288463ee12682",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
