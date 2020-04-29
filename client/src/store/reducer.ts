import { Actions, ActionTypes } from './types';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Poster: string;
  Ratings: {}[];
  Metascore: string;
  imdbRating: string;
  imdbID: string;
  Response: string;
}

export interface UserDetails {
  id: string;
  createdAt?: Date;
  displayName?: string;
  email?: string;
}

interface AppState {
  loading: boolean;
  movies: Movie[];
  errorMessage: null | string;
  movie: MovieDetails | null;
  currentUser: UserDetails | null;
  favourites: Movie[];
}

export const initialState: AppState = {
  loading: true,
  movies: [],
  errorMessage: null,
  movie: null,
  currentUser: null,
  favourites: [],
};

export const reducer = (state: AppState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.START_SEARCH_MOVIES:
    case ActionTypes.START_FETCH_MOVIE:
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
      };
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_OUT_FAILURE:
    case ActionTypes.SEARCH_MOVIES_FAILURE:
    case ActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        currentUser: action.payload,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        currentUser: null,
        favourites: [],
      };
    case ActionTypes.ADD_TO_FAVOURITES:
      return {
        ...state,
        errorMessage: null,
        favourites: action.payload,
      };
    case ActionTypes.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        errorMessage: null,
        favourites: action.payload,
      };
    case ActionTypes.SET_FAVOURITES_FROM_FIREBASE:
      return {
        ...state,
        errorMessage: null,
        favourites: action.payload,
      };
    case ActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movie: null,
      };
    case ActionTypes.CLEAR_SEARCH_MOVIES:
      return {
        ...state,
        movies: [],
      };
    default:
      return state;
  }
};
