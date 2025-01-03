import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBMN-BcRdRcBWDBMrmTxfnQWX5EE533JY0",
authDomain: "tienda-online-f4cad.firebaseapp.com",
projectId: "tienda-online-f4cad",
storageBucket: "tienda-online-f4cad.firebasestorage.app",
messagingSenderId: "433331817102",
appId: "1:433331817102:web:290b7518ed432e703557df"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);