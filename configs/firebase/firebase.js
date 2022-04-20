import firebase from 'firebase/compat/app';

import { getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_TO,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized')
}

export const firebaseaAuth = getAuth()

export const Authentication = () => {
    return firebaseaAuth
}

export const userLogin = async (email, password) => {
    await signInWithEmailAndPassword(firebaseaAuth, email, password);
}

export const userLogout = async () => {
    await signOut(firebaseaAuth);
}

export const resetPassword = async (email) => {
    await sendPasswordResetEmail(firebaseaAuth, email)
}

export const loginErrorMessage = (code) => {
    switch (code) {
        case 'auth/invalid-email':
            return 'Invalid email'
        case 'auth/wrong-password':
            return 'The forget password that you have entered is incorect. Forgotten password'
        case 'auth/user-not-found':
            return 'The email address you entered is not conected to an account.'
        default:
            return 'wrong password'
    }
}