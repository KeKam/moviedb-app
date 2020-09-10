import { Action, ActionTypes } from '../types/types';
import { Movie, MovieDetails } from '../actions/movie.actions';
import { UserDetails } from '../actions/user.actions';

interface AppState {
  loading: boolean;
  movies: Movie[] | null;
  errorMessage: null | string;
  movie: MovieDetails | null;
  currentUser: UserDetails | null;
  favourites: Movie[];
  searchTerm: string;
  page: number;
  isFetching: boolean;
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
  isFetching: true,
};

export const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ActionTypes.SET_IS_FETCHING:
      return {
        ...state,
        isFetching: false,
      };
    case ActionTypes.START_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
        movies: action.searchResults,
      };
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMessage: null,
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
        isFetching: false,
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
