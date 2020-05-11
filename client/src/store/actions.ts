import axios from 'axios';
import { Dispatch } from 'react';
import { User } from 'firebase';

import { Actions, ActionTypes } from './types';
import { MovieDetails, Movie, UserDetails } from './reducer';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUserFavourites,
  updateFavouritesInFirebase,
} from '../firebase/firebase.utils';

interface FetchSearchResults {
  Search: [];
  Response: string;
  Error: string;
}

interface FetchMovieDetails extends MovieDetails {
  Error: string;
}

const OMDB_API_KEY = process.env.REACT_APP_OMDB_API_KEY;

export const fetchSearchMovies = async (
  searchValue: string,
  page: number,
  dispatch: Dispatch<Actions>
) => {
  dispatch({ type: ActionTypes.START_SEARCH_MOVIES });

  try {
    const response = await axios.get<FetchSearchResults>(
      `https://www.omdbapi.com/?s=${searchValue}&page=${page}&apikey=${OMDB_API_KEY}`
    );

    if (response.data.Response === 'True') {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_SUCCESS,
        payload: response.data.Search,
      });
    } else {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_FAILURE,
        payload: response.data.Error,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async (id: string, dispatch: Dispatch<Actions>) => {
  dispatch({ type: ActionTypes.START_FETCH_MOVIE });

  try {
    const response = await axios.get<FetchMovieDetails>(
      `https://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`
    );
    if (response.data.Response === 'True') {
      dispatch({
        type: ActionTypes.FETCH_MOVIE_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: ActionTypes.FETCH_MOVIE_FAILURE,
        payload: response.data.Error,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserSnapshot = async (
  user: User | null,
  dispatch: Dispatch<Actions>
) => {
  try {
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef?.get();
    if (userSnapshot) {
      dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: { id: userSnapshot.id, ...userSnapshot.data() },
      });
      setFavouritesFromFirebase(userSnapshot.id, dispatch);
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_IN_FAILURE,
      payload: error.message,
    });
  }
};

export const signInWithGoogle = async (dispatch: Dispatch<Actions>) => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    await getUserSnapshot(user, dispatch);
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_IN_FAILURE,
      payload: error.message,
    });
  }
};

export const signOut = async (dispatch: Dispatch<Actions>) => {
  try {
    await auth.signOut();
    dispatch({ type: ActionTypes.SIGN_OUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_OUT_FAILURE,
      payload: error.message,
    });
  }
};

export const addToFavourites = (
  favourites: Movie[],
  newFavourite: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
) => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === newFavourite.imdbID
  );

  if (existingFavourite) return;

  dispatch({
    type: ActionTypes.ADD_TO_FAVOURITES,
    payload: [...favourites, newFavourite],
  });
  updateFavouritesInFirebase(currentUser, [...favourites, newFavourite]);
};

export const removeFromFavourites = (
  favourites: Movie[],
  favouriteToRemove: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
) => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === favouriteToRemove.imdbID
  );

  if (existingFavourite) {
    const newFavourites = favourites.filter(
      (favourite) => favourite.imdbID !== favouriteToRemove.imdbID
    );
    dispatch({
      type: ActionTypes.REMOVE_FROM_FAVOURITES,
      payload: newFavourites,
    });
    updateFavouritesInFirebase(currentUser, newFavourites);
  }
};

export const checkUserSession = (dispatch: Dispatch<Actions>) => {
  auth.onAuthStateChanged(async (user) => {
    try {
      if (user) {
        await getUserSnapshot(user, dispatch);
      } else {
        return null;
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.SIGN_IN_FAILURE,
        payload: error.message,
      });
    }
  });
};

export const setFavouritesFromFirebase = async (
  userId: string,
  dispatch: Dispatch<Actions>
) => {
  try {
    const favouritesRef = await getCurrentUserFavourites(userId);

    if (favouritesRef) {
      const favouritesSnapshot = await favouritesRef.get();

      dispatch({
        type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE,
        payload: favouritesSnapshot.data()?.favourites,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setPage = (
  pageState: number,
  option: string,
  dispatch: Dispatch<Actions>
) => {
  if (option === 'next') {
    dispatch({ type: ActionTypes.SET_PAGE, payload: pageState + 1 });
  } else if (option === 'previous') {
    dispatch({ type: ActionTypes.SET_PAGE, payload: pageState - 1 });
  } else {
    dispatch({ type: ActionTypes.SET_PAGE, payload: 1 });
  }
};
