
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-kTsa3enjS_BsKhkfU_M0DwgnrKxb9pU",
  authDomain: "tiendacoderreact.firebaseapp.com",
  projectId: "tiendacoderreact",
  storageBucket: "tiendacoderreact.appspot.com",
  messagingSenderId: "850970610586",
  appId: "1:850970610586:web:eb5e7cfe5fbc0ea8ad0823",
  measurementId: "G-KZ4RCRGXT4"
};


const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export default db;