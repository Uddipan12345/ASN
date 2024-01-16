import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwl0_JKwC10PlHiNAYqW41kgaKNTsMcFI",
    authDomain: "agvi-13f14.firebaseapp.com",
    projectId: "agvi-13f14",
    storageBucket: "agvi-13f14.appspot.com",
    messagingSenderId: "895908634945",
    appId: "1:895908634945:web:28b5f99acab899597881c0"
  };

  // Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };