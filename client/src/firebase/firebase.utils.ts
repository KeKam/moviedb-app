import firebase, { User } from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

import { UserDetails, Movie } from '../store/reducer';

const config = {
  apiKey: 'AIzaSyDckAphmDO4_4EtbW6k94P3UfupSdXkzwE',
  authDomain: 'moviedb-app-60919.firebaseapp.com',
  databaseURL: 'https://moviedb-app-60919.firebaseio.com',
  projectId: 'moviedb-app-60919',
  storageBucket: 'moviedb-app-60919.appspot.com',
  messagingSenderId: '314569931188',
  appId: '1:314569931188:web:377dfbc4f162a4b5d9dae1',
  measurementId: 'G-VBPFJ249E8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const createUserProfileDocument = async (user: User | null) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('Failed creating user', error);
    }
  }
  return userRef;
};

export const getCurrentUserFavourites = async (userId: string) => {
  try {
    const favouritesRef = firestore
      .collection('favourites')
      .where('userId', '==', userId);
    const snapShot = await favouritesRef.get();

    if (snapShot.empty) {
      const favouritesDocRef = firestore.collection('favourites').doc();
      await favouritesDocRef.set({ userId, favourites: [] });
      return favouritesDocRef;
    } else {
      return snapShot.docs[0].ref;
    }
  } catch (error) {
    console.log('Failed trying to get favourites', error);
  }
};

export const updateFavouritesInFirebase = async (
  currentUser: UserDetails | null,
  favourites: Movie[]
) => {
  if (currentUser) {
    try {
      const favouritesRef = await getCurrentUserFavourites(currentUser.id);
      if (favouritesRef) {
        await favouritesRef.update({ favourites });
      }
    } catch (error) {
      console.log(error);
    }
  }
};