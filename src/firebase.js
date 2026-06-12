import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAHKlqvpQ_DTY3rnILOeOQeKgI8LKOhk0w',
  authDomain: 'nh-mmi-recruitment.firebaseapp.com',
  projectId: 'nh-mmi-recruitment',
  storageBucket: 'nh-mmi-recruitment.firebasestorage.app',
  messagingSenderId: '142761644358',
  appId: '1:142761644358:web:f742076fc108b74c411547'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
