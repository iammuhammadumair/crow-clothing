import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQRdwfIEIqrZMP6CkK4s-YcIeQnFvjGPs",
    authDomain: "crown-db-30f39.firebaseapp.com",
    databaseURL: "https://crown-db-30f39.firebaseio.com",
    projectId: "crown-db-30f39",
    storageBucket: "crown-db-30f39.appspot.com",
    messagingSenderId: "218728761315",
    appId: "1:218728761315:web:f6636cba8b204ee11d42d6",
    measurementId: "G-9EFVNSN2Y9"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;