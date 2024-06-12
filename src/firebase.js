// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-7e35c.firebaseapp.com",
  projectId: "x-next-7e35c",
  storageBucket: "x-next-7e35c.appspot.com",
  messagingSenderId: "802485862543",
  appId: "1:802485862543:web:70a2812de83186514830fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);