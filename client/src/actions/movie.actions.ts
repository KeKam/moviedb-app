import axios from 'axios';
import { Dispatch } from 'react';

import { Action, ActionTypes } from '../types/types';

interface SearchResults {
  Search: [];
  Response: string;
  Error: string;
}

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

export const fetchSearchMoviesSuccess = (searchResults: Movie[]): Action => {
  return {
    type: ActionTypes.SEARCH_MOVIES_SUCCESS,
    searchResults,
  };
};

export const fetchSearchMoviesFailure = (error: string): Action => {
  return {
    type: ActionTypes.SEARCH_MOVIES_FAILURE,
    error,
  };
};

export const fetchMovieSuccess = (movieDetails: MovieDetails): Action => {
  return {
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    movieDetails,
  };
};

export const fetchMovieFailure = (error: string): Action => {
  return {
    type: ActionTypes.FETCH_MOVIE_FAILURE,
    error,
  };
};

export const setPage = (page: number): Action => {
  return {
    type: ActionTypes.SET_PAGE,
    page,
  };
};

export const setSearchTerm = (searchTerm: string): Action => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    searchTerm,
  };
};

export const clearMovieDetails = (): Action => {
  return {
    type: ActionTypes.CLEAR_MOVIE_DETAILS,
  };
};

export const startSearch = (): Action => {
  return {
    type: ActionTypes.START_SEARCH,
  };
};

export const startFetchSearchMovies = async (
  searchTerm: string,
  page: number,
  dispatch: Dispatch<Action>
) => {
  dispatch(startSearch());

  try {
    const response = await axios.post<SearchResults>('/search', {
      page,
      searchTerm,
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

export const startFetchMovie = async (
  id: string,
  dispatch: Dispatch<Action>
) => {
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
