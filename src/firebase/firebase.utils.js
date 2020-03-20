import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBGQw0DduiAAnLnRf8Jj-OYf44MkeHe0l0',
  authDomain: 'clothing-store-db-58568.firebaseapp.com',
  databaseURL: 'https://clothing-store-db-58568.firebaseio.com',
  projectId: 'clothing-store-db-58568',
  storageBucket: 'clothing-store-db-58568.appspot.com',
  messagingSenderId: '917949494791',
  appId: '1:917949494791:web:dc86f197677d74a9581ca2',
  measurementId: 'G-57MMP51T28'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
