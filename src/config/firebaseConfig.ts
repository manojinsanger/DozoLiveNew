import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, initializeAuth,  browserLocalPersistence } from "firebase/auth";


// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC-50EXKueUzOiGORhz2CktVOgACZgaweQ",
    authDomain: "dozo-live.firebaseapp.com",
    projectId: "dozo-live",
    storageBucket: "dozo-live.firebasestorage.app",
    messagingSenderId: "210237367752",
    appId: "1:210237367752:web:d4e11c0675935475ff4cfd",
    measurementId: "G-YFZJTTX0Z8"
};

const app = initializeApp(firebaseConfig);


export const firebaseApp = getApps().length === 0 ? app : getApp();
export const auth = getAuth(app);
// export const auth = initializeAuth(app, {
//     persistence: browserLocalPersistence
//   });
export const googleProvider = new GoogleAuthProvider();
export default app;

// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
