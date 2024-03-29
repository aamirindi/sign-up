// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";    
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "auth-b2968.firebaseapp.com",
  projectId: "auth-b2968",
  storageBucket: "auth-b2968.appspot.com",
  messagingSenderId: "162485987036",
  appId: "1:162485987036:web:396675b39f98c2d020b619",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Initialize Firebase Authentication and get a reference to the service
export {auth, provider}
