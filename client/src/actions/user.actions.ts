import { Dispatch } from 'react';
import { User } from 'firebase';

import { Actions, ActionTypes } from '../types/types';
import { Movie, UserDetails } from '../reducers/reducer';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUserFavourites,
  updateFavouritesInFirebase,
} from '../firebase/firebase.utils';

export const signInSuccess = (userDetails: UserDetails): Actions => {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    userDetails,
  };
};

export const signInFailure = (error: string): Actions => {
  return {
    type: ActionTypes.SIGN_IN_FAILURE,
    error,
  };
};

export const signOutSuccess = (): Actions => {
  return {
    type: ActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error: string): Actions => {
  return {
    type: ActionTypes.SIGN_OUT_FAILURE,
    error,
  };
};

export const addToFavourites = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.ADD_TO_FAVOURITES,
    favourites,
  };
};

export const removeFromFavourites = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVOURITES,
    favourites,
  };
};

export const setFavouritesFromFirebase = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE,
    favourites,
  };
};

export const getUserSnapshot = async (
  user: User | null,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef?.get();
    if (userSnapshot) {
      dispatch(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
      startSetFavouritesFromFirebase(userSnapshot.id, dispatch);
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export const signInWithGoogle = async (
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    await getUserSnapshot(user, dispatch);
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export const startSignOut = async (
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    await auth.signOut();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutFailure(error.message));
  }
};

export const checkUserSession = (dispatch: Dispatch<Actions>): void => {
  auth.onAuthStateChanged(
    async (user): Promise<void> => {
      try {
        if (!user) return;
        await getUserSnapshot(user, dispatch);
      } catch (error) {
        dispatch(signInFailure(error.message));
      }
    }
  );
};

export const startAddToFavourites = (
  favourites: Movie[],
  newFavourite: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
): void => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === newFavourite.imdbID
  );

  if (existingFavourite) return;

  dispatch(addToFavourites([...favourites, newFavourite]));
  updateFavouritesInFirebase(currentUser, [...favourites, newFavourite]);
};

export const startRemoveFromFavourites = (
  favourites: Movie[],
  favouriteToRemove: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
): void => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === favouriteToRemove.imdbID
  );

  if (existingFavourite) {
    const newFavourites = favourites.filter(
      (favourite) => favourite.imdbID !== favouriteToRemove.imdbID
    );

    dispatch(removeFromFavourites(newFavourites));
    updateFavouritesInFirebase(currentUser, newFavourites);
  }
};

export const startSetFavouritesFromFirebase = async (
  userId: string,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const favouritesRef = await getCurrentUserFavourites(userId);

    if (favouritesRef) {
      const favouritesSnapshot = await favouritesRef.get();

      dispatch(
        setFavouritesFromFirebase(favouritesSnapshot.data()?.favourites)
      );
    }
  } catch (error) {
    console.log(error);
  }
};
