import { MovieDetails, Movie, UserDetails } from '../store/reducer';

export enum ActionTypes {
  START_SEARCH_MOVIES = 'START_SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE',
  START_FETCH_MOVIE = 'START_FETCH_MOVIE',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
  TOGGLE_DETAILS_POPUP = 'TOGGLE_DETAILS_POPUP',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES',
  SET_FAVOURITES_FROM_FIREBASE = 'SET_FAVOURITES_FROM_FIREBASE',
}

export type Actions =
  | {
      type: ActionTypes.START_SEARCH_MOVIES;
    }
  | {
      type: ActionTypes.SEARCH_MOVIES_SUCCESS;
      payload: [];
    }
  | {
      type: ActionTypes.SEARCH_MOVIES_FAILURE;
      payload: string;
    }
  | {
      type: ActionTypes.START_FETCH_MOVIE;
    }
  | {
      type: ActionTypes.FETCH_MOVIE_SUCCESS;
      payload: MovieDetails;
    }
  | {
      type: ActionTypes.FETCH_MOVIE_FAILURE;
      payload: string;
    }
  | {
      type: ActionTypes.TOGGLE_DETAILS_POPUP;
    }
  | {
      type: ActionTypes.SIGN_IN_SUCCESS;
      payload: UserDetails;
    }
  | {
      type: ActionTypes.SIGN_IN_FAILURE;
      payload: string;
    }
  | {
      type: ActionTypes.SIGN_OUT_SUCCESS;
    }
  | {
      type: ActionTypes.SIGN_OUT_FAILURE;
      payload: string;
    }
  | {
      type: ActionTypes.ADD_TO_FAVOURITES;
      payload: Movie[];
    }
  | {
      type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE;
      payload: Movie[];
    }
  | {
      type: ActionTypes.REMOVE_FROM_FAVOURITES;
      payload: Movie[];
    };
