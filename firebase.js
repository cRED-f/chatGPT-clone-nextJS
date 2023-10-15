import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAU4QRyZQ_5HhKu5PxJvbBFBJFcaxRBoU",
  authDomain: "chatgpt-app-430c4.firebaseapp.com",
  projectId: "chatgpt-app-430c4",
  storageBucket: "chatgpt-app-430c4.appspot.com",
  messagingSenderId: "516123276130",
  appId: "1:516123276130:web:cef5a226787ce267adb23b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
