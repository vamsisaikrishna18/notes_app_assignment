// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4SFCxpzA6SnYYKAwNgE-IfHhcNiraB4I",
  authDomain: "auth-a737e.firebaseapp.com",
  projectId: "auth-a737e",
  storageBucket: "auth-a737e.appspot.com",
  messagingSenderId: "535247975682",
  appId: "1:535247975682:web:aa5b06091bf08f605a7e1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, app};