import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import { SearchBar } from '../search-bar/search-bar';
import { ActionTypes } from '../store/types';
import { reducer, initialState } from '../store/reducer';

interface SearchResults {
  Search: [];
  Response: string;
  Error: string;
}

const OMDB_API_KEY = 'YOUR_API_KEY';

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const response = await axios.get<SearchResults>(
          `https://www.omdbapi.com/?s=man&apikey=${OMDB_API_KEY}`
        );
        dispatch({
          type: ActionTypes.SEARCH_MOVIES_SUCCESS,
          payload: response.data.Search
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const search = async (searchValue: string): Promise<void> => {
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

  const { movies, errorMessage, loading } = state;

  return (
    <div>
      {errorMessage ? <h2>{errorMessage}</h2> : null}
      {loading ? <h2>Loading..</h2> : null}
      <SearchBar search={search} />
      {movies.map(movie => {
        return <div>{movie.Title}</div>;
      })}
    </div>
  );
};
