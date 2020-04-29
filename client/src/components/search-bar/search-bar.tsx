import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';

import { useAppState } from '../../hooks/useAppState';
import { fetchSearchMovies } from '../../store/actions';
import { SearchBarStyles as S } from './search-bar.styled';
import { ActionTypes } from '../../store/types';

export const SearchBar = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(0);
  const { dispatch } = useAppState();

  useEffect(() => {
    fetchSearchMovies(searchValue, page, dispatch);
  }, [page]);

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
    setPage(0);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch({ type: ActionTypes.CLEAR_SEARCH_MOVIES });
      setPage(1);
    }
  };

  return (
    <S.Container>
      <S.Title>Search For Any Movie</S.Title>
      <S.Input
        onChange={handleOnInputChange}
        onKeyDown={handleOnKeyDown}
        value={searchValue}
        placeholder='Search movies...'
        type='text'
      />
      {page >= 1 ? (
        <S.ButtonsContainer>
          <S.Button onClick={() => setPage(page - 1)}>Previous</S.Button>
          <S.Button onClick={() => setPage(page + 1)}>Next</S.Button>
        </S.ButtonsContainer>
      ) : null}
    </S.Container>
  );
};
