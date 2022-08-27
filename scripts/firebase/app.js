// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYLzZDGUT9s9_vgE5mVu-XsLoPKFJa8p0",
  authDomain: "upsidedown-cbbe0.firebaseapp.com",
  projectId: "upsidedown-cbbe0",
  storageBucket: "upsidedown-cbbe0.appspot.com",
  messagingSenderId: "232363997405",
  appId: "1:232363997405:web:0f4f41bbe5fbb630f08334",
  measurementId: "G-VVLQG6P10C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
