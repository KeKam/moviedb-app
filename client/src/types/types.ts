import { Movie, MovieDetails } from '../actions/movie.actions';
import { UserDetails } from '../actions/user.actions';

export enum ActionTypes {
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
  SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = 'SIGN_IN_FAILURE',
  SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE',
  ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES',
  REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES',
  SET_FAVOURITES_FROM_FIREBASE = 'SET_FAVOURITES_FROM_FIREBASE',
  CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS',
  SET_SEARCH_TERM = 'SET_SEARCH_TERM',
  SET_PAGE = 'SET_PAGE',
}

export type Action =
  | {
      type: ActionTypes.SEARCH_MOVIES_SUCCESS;
      searchResults: Movie[];
    }
  | {
      type: ActionTypes.SEARCH_MOVIES_FAILURE;
      error: string;
    }
  | {
      type: ActionTypes.FETCH_MOVIE_SUCCESS;
      movieDetails: MovieDetails;
    }
  | {
      type: ActionTypes.FETCH_MOVIE_FAILURE;
      error: string;
    }
  | {
      type: ActionTypes.SIGN_IN_SUCCESS;
      userDetails: UserDetails;
    }
  | {
      type: ActionTypes.SIGN_IN_FAILURE;
      error: string;
    }
  | {
      type: ActionTypes.SIGN_OUT_SUCCESS;
    }
  | {
      type: ActionTypes.SIGN_OUT_FAILURE;
      error: string;
    }
  | {
      type: ActionTypes.ADD_TO_FAVOURITES;
      favourites: Movie[];
    }
  | {
      type: ActionTypes.SET_FAVOURITES_FROM_FIREBASE;
      favourites: Movie[];
    }
  | {
      type: ActionTypes.REMOVE_FROM_FAVOURITES;
      favourites: Movie[];
    }
  | {
      type: ActionTypes.CLEAR_MOVIE_DETAILS;
    }
  | {
      type: ActionTypes.SET_SEARCH_TERM;
      searchTerm: string;
    }
  | {
      type: ActionTypes.SET_PAGE;
      page: number;
    };
