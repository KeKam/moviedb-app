import axios from 'axios';

import { Actions, ActionTypes } from './types';

interface SearchResults {
  Search: [];
  Response: string;
  Error: string;
}

const OMDB_API_KEY = 'YOUR_API_KEY';

export const fetchSearchMovies = async (
  searchValue: string,
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
  dispatch({ type: ActionTypes.START_SEARCH_MOVIES });

  try {
    const response = await axios.get<SearchResults>(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${OMDB_API_KEY}`
    );
    if (response.data.Response === 'True') {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_SUCCESS,
        payload: response.data.Search
      });
    } else {
      dispatch({
        type: ActionTypes.SEARCH_MOVIES_FAILURE,
        payload: response.data.Error
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovie = async (
  id: string,
  dispatch: React.Dispatch<Actions>
): Promise<void> => {
  dispatch({ type: ActionTypes.START_FETCH_MOVIE });

  try {
    const response = await axios.get<SearchResults>(
      `https://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`
    );
    if (response.data.Response === 'True') {
      dispatch({
        type: ActionTypes.FETCH_MOVIE_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: ActionTypes.FETCH_MOVIE_FAILURE,
        payload: response.data.Error
      });
    }
  } catch (error) {
    console.log(error);
  }
};
