import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAG42MwZZof5NbW0I5MW7pjXde2jCS0Ym8",
    authDomain: "e-commerce-iphone-cesar-ruvino.firebaseapp.com",
    projectId: "e-commerce-iphone-cesar-ruvino",
    storageBucket: "e-commerce-iphone-cesar-ruvino.appspot.com",
    messagingSenderId: "262400908715",
    appId: "1:262400908715:web:4c86c71ab6330edde506ee",
    measurementId: "G-254DEKFW7D"
};

const app = initializeApp(firebaseConfig);;
export const db = getFirestore(app);