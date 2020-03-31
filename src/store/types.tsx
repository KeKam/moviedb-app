import { MovieDetails } from '../store/reducer';

export enum ActionTypes {
  START_SEARCH_MOVIES = 'START_SEARCH_MOVIES',
  SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS',
  SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE',
  START_FETCH_MOVIE = 'START_FETCH_MOVIE',
  FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS',
  FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE',
  TOGGLE_DETAILS_POPUP = 'TOGGLE_DETAILS_POPUP'
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
    };
