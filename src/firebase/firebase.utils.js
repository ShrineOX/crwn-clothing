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

//create a user and save in firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // query to firebase to check whether this user is already exist
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // create a user and store in firebase database if the user does not exist
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('error createing user ', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
