import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuL59OwnY0MthRPaHyRam9uiPsoCkoBIo",
  authDomain: "authentication-signup-c5bf4.firebaseapp.com",
  projectId: "authentication-signup-c5bf4",
  storageBucket: "authentication-signup-c5bf4.appspot.com",
  messagingSenderId: "818875598263",
  appId: "1:818875598263:web:bf8c2f88b262ed35f05432",
  measurementId: "G-VXRYR23V8X"
};
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app);