
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "demointerview-31c6c.firebaseapp.com",
  projectId: "demointerview-31c6c",
  storageBucket: "demointerview-31c6c.firebasestorage.app",
  messagingSenderId: "133405759512",
  appId: "1:133405759512:web:570d9cc1c70d18d5824b6d"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}