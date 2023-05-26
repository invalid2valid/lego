// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: "legoel-6d2b1",
  storageBucket: "legoel-6d2b1.appspot.com",
  messagingSenderId: "581825132177",
  appId: "1:581825132177:web:7bcaf1faffaf28458ff130",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
