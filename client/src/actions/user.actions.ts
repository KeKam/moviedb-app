import { Dispatch } from 'react';

import { Action, ActionTypes } from '../types/types';
import { Movie } from '../actions/movie.actions';
import {
  auth,
  googleProvider,
  getCurrentUser,
  getUserFavouritesFromFirebase,
  updateFavouritesInFirebase,
} from '../firebase/firebase.utils';

export interface UserDetails {
  id: string;
  createdAt?: Date;
  displayName?: string;
  email?: string;
}

export const signInSuccess = (userDetails: UserDetails): Action => {
  return {
    type: ActionTypes.SIGN_IN_SUCCESS,
    userDetails,
  };
};

export const signInFailure = (error: string): Action => {
  return {
    type: ActionTypes.SIGN_IN_FAILURE,
    error,
  };
};

export const signOutSuccess = (): Action => {
  return {
    type: ActionTypes.SIGN_OUT_SUCCESS,
  };
};

export const signOutFailure = (error: string): Action => {
  return {
    type: ActionTypes.SIGN_OUT_FAILURE,
    error,
  };
};

export const addToFavourites = (favourites: Movie[]): Action => {
  return {
    type: ActionTypes.ADD_TO_FAVOURITES,
    favourites,
  };
};

export const removeFromFavourites = (favourites: Movie[]): Action => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVOURITES,
    favourites,
  };
};

export const setFavouritesFromFirebase = (favourites: Movie[]): Action => {
  return {
    type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE,
    favourites,
  };
};

export const signInWithGoogle = async (
  dispatch: Dispatch<Action>
): Promise<void> => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    const currentUser = await getCurrentUser(user);

    if (currentUser) {
      dispatch(signInSuccess({ id: currentUser.id, ...currentUser.data() }));
    }
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

export const startSignOut = async (
  dispatch: Dispatch<Action>
): Promise<void> => {
  try {
    await auth.signOut();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutFailure(error.message));
  }
};

export const checkUserSession = (dispatch: Dispatch<Action>): void => {
  auth.onAuthStateChanged(
    async (user): Promise<void> => {
      try {
        if (!user) return;
        const currentUser = await getCurrentUser(user);

        if (currentUser) {
          const userFavourites = await getUserFavouritesFromFirebase(
            currentUser.id
          );

          dispatch(
            signInSuccess({ id: currentUser.id, ...currentUser.data() })
          );
          dispatch(setFavouritesFromFirebase(userFavourites));
        }
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
  dispatch: Dispatch<Action>
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
  dispatch: Dispatch<Action>
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
