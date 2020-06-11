import axios from 'axios';
import { Dispatch } from 'react';

import { Actions, ActionTypes } from '../types/types';
import { Movie, MovieDetails } from '../reducers/reducer';

interface SearchResults {
  Search: [];
  Response: string;
  Error: string;
}

export const fetchSearchMoviesSuccess = (searchResults: Movie[]): Actions => {
  return {
    type: ActionTypes.SEARCH_MOVIES_SUCCESS,
    searchResults,
  };
};

export const fetchSearchMoviesFailure = (error: string): Actions => {
  return {
    type: ActionTypes.SEARCH_MOVIES_FAILURE,
    error,
  };
};

export const fetchMovieSuccess = (movieDetails: MovieDetails): Actions => {
  return {
    type: ActionTypes.FETCH_MOVIE_SUCCESS,
    movieDetails,
  };
};

export const fetchMovieFailure = (error: string): Actions => {
  return {
    type: ActionTypes.FETCH_MOVIE_FAILURE,
    error,
  };
};

export const setPage = (page: number): Actions => {
  return {
    type: ActionTypes.SET_PAGE,
    page,
  };
};

export const setSearchTerm = (searchTerm: string): Actions => {
  return {
    type: ActionTypes.SET_SEARCH_TERM,
    searchTerm,
  };
};

export const clearMovieDetails = (): Actions => {
  return {
    type: ActionTypes.CLEAR_MOVIE_DETAILS,
  };
};

export const startFetchSearchMovies = async (
  searchValue: string,
  page: number,
  dispatch: Dispatch<Actions>
): Promise<void> => {
  try {
    const response = await axios.post<SearchResults>('/search', {
      page,
      searchValue,
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
  dispatch: Dispatch<Actions>
): Promise<void> => {
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
