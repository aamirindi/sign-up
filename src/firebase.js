import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBCR7SCrbAVLuGZNLFWvtAnTS9Z9zvcHP4",
    authDomain: "authentication-8201b.firebaseapp.com",
    projectId: "authentication-8201b",
    storageBucket: "authentication-8201b.appspot.com",
    messagingSenderId: "954149959458",
    appId: "1:954149959458:web:c26d7765384a4c5858977b",
    measurementId: "G-8D4EBGZ20D"
  };

const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)