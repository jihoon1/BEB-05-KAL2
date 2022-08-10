import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey:             process.env.REACT_APP_FDB_APIKEY,
    authDomain:         process.env.REACT_APP_FDB_AD,
    projectId:          process.env.REACT_APP_FDB_PID,
    storageBucket:      process.env.REACT_APP_FDB_SB,
    messagingSenderId:  process.env.REACT_APP_FDB_MSID,
    appId:              process.env.REACT_APP_FDB_AID,
    measurementId:      process.env.REACT_APP_FDB_MID,
};
  
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
  
export default db;