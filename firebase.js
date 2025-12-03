// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUe2RIH6yLgrve5Lv7RKwXhdLGs4wkPXk",
  authDomain: "retrospecticuss.firebaseapp.com",
  projectId: "retrospecticuss",
  storageBucket: "retrospecticuss.firebasestorage.app",
  messagingSenderId: "35207094394",
  appId: "1:35207094394:web:8d637e510925eb9f56dbc3",
  measurementId: "G-9VRELGLKNC"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
