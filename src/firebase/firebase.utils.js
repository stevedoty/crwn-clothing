import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import apiKey from './api_key';

const config = {
    apiKey,
    authDomain: "crown-db-6bbf5.firebaseapp.com",
    databaseURL: "https://crown-db-6bbf5.firebaseio.com",
    projectId: "crown-db-6bbf5",
    storageBucket: "crown-db-6bbf5.appspot.com",
    messagingSenderId: "751606286111",
    appId: "1:751606286111:web:667136310def809bc4922a",
    measurementId: "G-MF5RNG5XCH"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;