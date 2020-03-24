import { Actions, ActionTypes } from './types';

interface AppState {
  loading: boolean;
  movies: {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }[];
  errorMessage: null | string;
}

export const initialState = {
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
