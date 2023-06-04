import { collection, query, where, getDocs, Firestore, getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './FirebaseConfig';
import { getAuth } from 'firebase/auth';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();
const q = query(collection(db, 'chat-room'));

export function SubmitMessage() {
    console.log(q);
}