import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import {
    addDoc,
    collection,
    deleteDoc,
    doc as firestoreDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    serverTimestamp,
    updateDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzCCuLAEq0WmqGBoNIiwg1CVlSn83DRkM",
    authDomain: "checklist-5s-teleinfor.firebaseapp.com",
    projectId: "checklist-5s-teleinfor",
    storageBucket: "checklist-5s-teleinfor.firebasestorage.app",
    messagingSenderId: "278055988273",
    appId: "1:278055988273:web:a18df3b59ed9802b247910",
    measurementId: "G-GRP6RED6ND"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export {
    addDoc,
    collection,
    deleteDoc,
    firestoreDoc,
    getDocs,
    limit,
    onAuthStateChanged,
    orderBy,
    query,
    serverTimestamp,
    signInWithEmailAndPassword,
    signOut,
    updateDoc
};
