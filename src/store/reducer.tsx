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
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {}[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface AppState {
  loading: boolean;
  movies: Movie[];
  errorMessage: null | string;
  movie: MovieDetails | null;
}

export const initialState: AppState = {
  loading: true,
  movies: [],
  errorMessage: null,
  movie: null
};

export const reducer = (state: AppState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.START_SEARCH_MOVIES:
    case ActionTypes.START_FETCH_MOVIE:
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
    case ActionTypes.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        movie: action.payload
      };
    case ActionTypes.SEARCH_MOVIES_FAILURE:
    case ActionTypes.FETCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
