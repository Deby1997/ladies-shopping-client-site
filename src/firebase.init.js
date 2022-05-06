// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAw92R9vaX_fo2897gZEcrGOfZSS_86n00",
    authDomain: "shopping-zone-8ecc3.firebaseapp.com",
    projectId: "shopping-zone-8ecc3",
    storageBucket: "shopping-zone-8ecc3.appspot.com",
    messagingSenderId: "564163724805",
    appId: "564163724805:web:22d1cc0ffc9c1baea0fe6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;