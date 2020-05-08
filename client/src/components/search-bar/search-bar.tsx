import React, { useEffect, ChangeEvent, KeyboardEvent } from 'react';

import { useAppState } from '../../hooks/useAppState';
import { fetchSearchMovies, setPage } from '../../store/actions';
import { SearchBarStyles as S } from './search-bar.styled';
import { ActionTypes } from '../../store/types';

export const SearchBar = (): JSX.Element => {
  const { state, dispatch } = useAppState();
  const { searchTerm, page } = state;

  useEffect(() => {
    fetchSearchMovies(searchTerm, page, dispatch);
  }, [searchTerm, page, dispatch]);

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: ActionTypes.SET_SEARCH_TERM,
      payload: e.target.value,
    });

    if (page !== 0) {
      setPage(page, 'default', dispatch);
    }
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setPage(page, 'start', dispatch);
    }
  };

  return (
    <S.Container>
      <S.Title>Search For Any Movie</S.Title>
      <S.Input
        onChange={handleOnInputChange}
        onKeyDown={handleOnKeyDown}
        value={searchTerm}
        placeholder='Search movies...'
        type='text'
      />
      <S.ButtonsContainer>
        <S.Button
          disabled={page === 0 || page === 1}
          onClick={() => setPage(page, 'previous', dispatch)}
        >
          Previous
        </S.Button>
        <S.Button
          disabled={page === 0}
          onClick={() => setPage(page, 'next', dispatch)}
        >
          Next
        </S.Button>
      </S.ButtonsContainer>
    </S.Container>
  );
};
