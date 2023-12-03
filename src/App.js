import React from "react";
import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYF5mrQ04y7A57b9w0IMxWjK1lw_j1y24",
  authDomain: "kbs-events.firebaseapp.com",
  projectId: "kbs-events",
  storageBucket: "kbs-events.appspot.com",
  messagingSenderId: "854596818785",
  appId: "1:854596818785:web:4071c7bd1f0c87231f9720",
  measurementId: "G-RE8T78V06L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer />
      </header>
    </div>
  );
}

export default App;
