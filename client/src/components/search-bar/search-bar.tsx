import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAppState, useAppDispatch } from '../../contexts/app.context';
import { setSearchTerm } from '../../actions/movie.actions';
import { SearchBarStyles as S } from './search-bar.styled';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const { searchTerm } = useAppState();
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    if (searchValue !== '' && searchValue !== searchTerm) {
      const timerId = setTimeout(() => {
        dispatch(setSearchTerm(searchValue));
      }, 1000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [searchValue, searchTerm, dispatch]);

  return (
    <S.Container>
      {history.location.pathname !== '/favourites' ? (
        <S.Input
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          placeholder='Search movies...'
          type='text'
          aria-hidden='true'
        />
      ) : null}
    </S.Container>
  );
};
