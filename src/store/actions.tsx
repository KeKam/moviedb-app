import axios from 'axios';
import { User } from 'firebase';

import { Actions, ActionTypes } from './types';
import { MovieDetails, Movie } from '../store/reducer';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../firebase/firebase.utils';

interface FetchSearchResults {
  Search: [];
  Response: string;
  Error: string;
}

interface FetchMovieDetails extends MovieDetails {
  Error: string;
}

const OMDB_API_KEY = 'YOUR_API_KEY';

export const fetchSearchMovies = async (
  searchValue: string,
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
  dispatch({ type: ActionTypes.START_SEARCH_MOVIES });

  try {
    const response = await axios.get<FetchSearchResults>(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${OMDB_API_KEY}`
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

export const fetchMovie = async (
  id: string,
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
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
  dispatch: React.Dispatch<Actions>
) => {
  try {
    const userRef = await createUserProfileDocument(user);
    const userSnapshot = await userRef?.get();
    if (userSnapshot) {
      dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: { id: userSnapshot.id, ...userSnapshot.data() },
      });
    }
  } catch (error) {
    dispatch({
      type: ActionTypes.SIGN_IN_FAILURE,
      payload: error.message,
    });
  }
};

export const signInWithGoogle = async (
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
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

export const signOut = async (
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
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
  dispatch: React.Dispatch<Actions>
) => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === newFavourite.imdbID
  );

  if (existingFavourite) {
    return favourites.map((favourite) =>
      favourite.imdbID === newFavourite.imdbID ? null : favourite
    );
  }
  dispatch({
    type: ActionTypes.ADD_TO_FAVOURITES,
    payload: [...favourites, newFavourite],
  });
};

export const checkUserSession = (dispatch: React.Dispatch<Actions>) => {
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
