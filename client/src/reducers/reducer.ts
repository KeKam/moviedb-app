import { Actions, ActionTypes } from '../types/types';

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
  imdbRating: string;
  imdbID: string;
  Response: string;
  Error: string;
}

export interface UserDetails {
  id: string;
  createdAt?: Date;
  displayName?: string;
  email?: string;
}

interface AppState {
  loading: boolean;
  movies: Movie[] | null;
  errorMessage: null | string;
  movie: MovieDetails | null;
  currentUser: UserDetails | null;
  favourites: Movie[];
  searchTerm: string;
  page: number;
}

export const initialState: AppState = {
  loading: false,
  movies: null,
  errorMessage: null,
  movie: null,
  currentUser: null,
  favourites: [],
  searchTerm: 'man',
  page: 1,
};

export const reducer = (state: AppState, action: Actions): AppState => {
  switch (action.type) {
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.searchResults,
      };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.movieDetails,
      };
    case ActionTypes.SIGN_IN_FAILURE:
    case ActionTypes.SIGN_OUT_FAILURE:
    case ActionTypes.SEARCH_MOVIES_FAILURE:
    case ActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        currentUser: action.userDetails,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        errorMessage: null,
        currentUser: null,
        favourites: [],
      };
    case ActionTypes.ADD_TO_FAVOURITES:
    case ActionTypes.REMOVE_FROM_FAVOURITES:
    case ActionTypes.SET_FAVOURITES_FROM_FIREBASE:
      return {
        ...state,
        errorMessage: null,
        favourites: action.favourites,
      };
    case ActionTypes.CLEAR_MOVIE_DETAILS:
      return {
        ...state,
        movie: null,
      };
    case ActionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        loading: true,
        page: 1,
        searchTerm: action.searchTerm,
      };
    case ActionTypes.SET_PAGE:
      return {
        ...state,
        loading: true,
        page: action.page,
      };
    default:
      return state;
  }
};
