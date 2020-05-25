import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState } from '../../hooks/useAppState';
import { fetchSearchMovies, setPage } from '../../store/actions';
import { SearchBarStyles as S } from './search-bar.styled';
import { ActionTypes } from '../../store/types';

export const SearchBar = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const [searchValue, setSearchValue] = useState('');
  const history = useHistory();
  const { pathname } = history.location;
  const { searchTerm, page } = state;

  useEffect(() => {
    fetchSearchMovies(searchTerm, page, dispatch);
  }, [searchTerm, page, dispatch]);

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      dispatch({
        type: ActionTypes.SET_SEARCH_TERM,
        payload: searchValue,
      });
      setPage(page, 'start', dispatch);
    }
  };

  return (
    <S.Container>
      {pathname !== '/favourites' ? (
        <S.Input
          onChange={handleOnInputChange}
          onKeyDown={handleOnKeyDown}
          value={searchValue}
          placeholder='Search movies...'
          type='text'
        />
      ) : null}
    </S.Container>
  );
};
