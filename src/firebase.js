import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqFI10fCSm6EZIpS8QmlS1G1Li6l_v7Zs",
  authDomain: "pilot-app-54419.firebaseapp.com",
  projectId: "pilot-app-54419",
  storageBucket: "pilot-app-54419.firebasestorage.app",
  messagingSenderId: "240215933761",
  appId: "1:240215933761:web:40cacd25dd3cf20ef9d7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;