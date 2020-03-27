import { Actions, ActionTypes } from './types';

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface AppState {
  loading: boolean;
  movies: Movie[];
  errorMessage: null | string;
}

export const initialState: AppState = {
  loading: true,
  movies: [],
  errorMessage: null
};

export const reducer = (state: AppState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.START_SEARCH_MOVIES:
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case ActionTypes.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case ActionTypes.SEARCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
