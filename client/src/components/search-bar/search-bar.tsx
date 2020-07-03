import React, { useState, useEffect, KeyboardEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../hooks/useAppState';
import {
  startFetchSearchMovies,
  setSearchTerm,
} from '../../actions/movie.actions';
import { SearchBarStyles as S } from './search-bar.styled';

export const SearchBar = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const { pathname } = history.location;
  const { searchTerm, page } = state;

  useEffect(() => {
    startFetchSearchMovies(searchTerm, page, dispatch);
  }, [searchTerm, page, dispatch]);

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if ((e.key === 'Enter' && searchValue !== searchTerm) || '') {
      dispatch(setSearchTerm(searchValue));
    }
  };

  return (
    <S.Container>
      {pathname !== '/favourites' ? (
        <S.Input
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleOnKeyDown}
          value={searchValue}
          placeholder='Search movies...'
          type='text'
        />
      ) : null}
    </S.Container>
  );
};
