// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcP1tA4mFySHMxyU9r00HnmEpk_H9bQTA",
    authDomain: "medimatrix-ad788.firebaseapp.com",
    projectId: "medimatrix-ad788",
    storageBucket: "medimatrix-ad788.appspot.com",
    messagingSenderId: "1069611995337",
    appId: "1:1069611995337:web:0410cb1ace7800b7557d18"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };