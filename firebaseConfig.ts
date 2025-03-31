// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZwp0LClcaWb7guHWuS2whP7D8p-yzDs0",
  authDomain: "estrellas-fd5fd.firebaseapp.com",
  projectId: "estrellas-fd5fd",
  storageBucket: "estrellas-fd5fd.firebasestorage.app",
  messagingSenderId: "311708590865",
  appId: "1:311708590865:web:7ef087892e89cb1fada2b0",
  measurementId: "G-GZFDGMTQP1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
