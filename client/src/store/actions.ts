import axios from 'axios';
import { Dispatch } from 'react';
import { User } from 'firebase';

import { Actions, ActionTypes } from './types';
import { Movie, UserDetails, MovieDetails } from './reducer';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUserFavourites,
  updateFavouritesInFirebase,
} from '../firebase/firebase.utils';

interface SearchResults {
  Search: [];
  Response: string;
  Error: string;
}

export const fetchSearchMoviesSuccess = (searchResults: Movie[]): Actions => {
  return {
    type: ActionTypes.SEARCH_MOVIES_SUCCESS,
    searchResults,
  };
};

export const fetchSearchMoviesFailure = (error: string): Actions => {
  return {
    type: ActionTypes.SEARCH_MOVIES_FAILURE,
    error,
  };
};

export const startFetchSearchMovies = async (
  searchValue: string,
  page: number,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const response = await axios.post<SearchResults>('/search', {
      page,
      searchValue,
    });

    if (response.data.Response === 'True') {
      dispatch(fetchSearchMoviesSuccess(response.data.Search));
    } else {
      dispatch(fetchSearchMoviesFailure(response.data.Error));
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieSuccess = (movieDetails: MovieDetails): Actions => {
  return {
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    movieDetails,
  };
};

export const fetchMovieFailure = (error: string): Actions => {
  return {
    type: ActionTypes.FETCH_MOVIE_FAILURE,
    error,
  };
};

export const startFetchMovie = async (
  id: string,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const response = await axios.post<MovieDetails>(`/details/${id}`, {
      id,
    });

    if (response.data.Response === 'True') {
      dispatch(fetchMovieSuccess(response.data));
    } else {
      dispatch(fetchMovieFailure(response.data.Error));
    }
  } catch (error) {
    console.log(error);
  }
};

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

export const addToFavourites = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.ADD_TO_FAVOURITES,
    favourites,
  };
};

export const startAddToFavourites = async (
  favourites: Movie[],
  newFavourite: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === newFavourite.imdbID
  );

  if (existingFavourite) return;

  await updateFavouritesInFirebase(currentUser, [...favourites, newFavourite]);
  dispatch(addToFavourites([...favourites, newFavourite]));
};

export const removeFromFavourites = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVOURITES,
    favourites,
  };
};

export const startRemoveFromFavourites = async (
  favourites: Movie[],
  favouriteToRemove: Movie,
  currentUser: UserDetails | null,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  const existingFavourite = favourites.find(
    (favourite) => favourite.imdbID === favouriteToRemove.imdbID
  );

  if (existingFavourite) {
    const newFavourites = favourites.filter(
      (favourite) => favourite.imdbID !== favouriteToRemove.imdbID
    );

    await updateFavouritesInFirebase(currentUser, newFavourites);
    dispatch(removeFromFavourites(newFavourites));
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

export const setFavouritesFromFirebase = (favourites: Movie[]): Actions => {
  return {
    type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE,
    favourites,
  };
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

export const setPage = (page: number): Actions => {
  return {
    type: ActionTypes.SET_PAGE,
    page,
  };
};

export const setSearchTerm = (searchTerm: string): Actions => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    searchTerm,
  };
};

export const clearMovieDetails = (): Actions => {
  return {
    type: ActionTypes.CLEAR_MOVIE_DETAILS,
  };
};
