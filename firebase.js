import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2lY45OFxLL0oNVeuAWFPuZM7sLs96sgU",
  authDomain: "ourosat-4e12d.firebaseapp.com",
  projectId: "ourosat-4e12d",
  storageBucket: "ourosat-4e12d.appspot.com",
  messagingSenderId: "483026657685",
  appId: "1:483026657685:web:0de64037743cee8cea569c",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { app, database };
