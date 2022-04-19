import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3F3YQJUgbueDLWwyPPG6-uBEGY8s3oPs",
  authDomain: "expense-tracker-27d89.firebaseapp.com",
  projectId: "expense-tracker-27d89",
  storageBucket: "expense-tracker-27d89.appspot.com",
  messagingSenderId: "604522754534",
  appId: "1:604522754534:web:707d1fe4fcb1fb5eaca627",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const expensesRef = collection(db, "expenses");
const categoriesRef = collection(db, "categories");

export { db, expensesRef, categoriesRef };
