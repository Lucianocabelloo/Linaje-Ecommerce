import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBDSUesSsVjOgVwCIGmpC9QuzViOdP-txY",
    authDomain: "linaje-eccomerce.firebaseapp.com",
    projectId: "linaje-eccomerce",
    storageBucket: "linaje-eccomerce.appspot.com",
    messagingSenderId: "622738049934",
    appId: "1:622738049934:web:5c1b7a1a16067c06dfb2df"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);