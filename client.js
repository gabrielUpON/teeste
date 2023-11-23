import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage'; // Importe a função getStorage do pacote firebase/storage

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCzItApROo6zCVrBEw4mVJ5Epq7sofuXbY",
    authDomain: "teste-firebase-4e3f5.firebaseapp.com",
    projectId: "teste-firebase-4e3f5",
    storageBucket: "teste-firebase-4e3f5.appspot.com",
    messagingSenderId: "12257330775",
    appId: "1:12257330775:web:1f6dfd523272475592c512"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app); // Importe e exporte o objeto storage
export const database = getFirestore(app); // Importe do firestone