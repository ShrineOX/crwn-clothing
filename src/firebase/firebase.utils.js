import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCQTqFcdsTUsGNCMwA5h47NAYARR79pPzs',
  authDomain: 'crown-clothing-db-9a299.firebaseapp.com',
  projectId: 'crown-clothing-db-9a299',
  storageBucket: 'crown-clothing-db-9a299.appspot.com',
  messagingSenderId: '338200707091',
  appId: '1:338200707091:web:ce32211cf7034364417fe6',
  measurementId: 'G-HYK2XRCCYB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
