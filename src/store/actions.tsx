import axios from 'axios';

import { Actions, ActionTypes } from './types';
import { MovieDetails } from '../store/reducer';
import {
  auth,
  googleProvider,
  createUserProfileDocument
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
        payload: response.data.Search
      });
    } else {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_FAILURE,
        payload: response.data.Error
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
        payload: response.data
      });
    } else {
      dispatch({
        type: ActionTypes.FETCH_MOVIE_FAILURE,
        payload: response.data.Error
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = async (
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    console.log(createUserProfileDocument(user));
    const userRef = await createUserProfileDocument(user);

    if (userRef) {
      const userSnapshot = await userRef.get();
      dispatch({
        type: ActionTypes.SIGN_IN_SUCCESS,
        payload: { id: userSnapshot.id, ...userSnapshot.data() }
      });
    }
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ActionTypes.SIGN_IN_FAILURE,
      payload: error.message
    });
  }
};
