import React, { useState } from 'react';

import { useAppState } from '../../hooks/useAppState';
import { fetchSearchMovies } from '../../store/actions';
import { SearchBarStyles as S } from './search-bar.styled';

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { dispatch } = useAppState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault();
      fetchSearchMovies(searchValue, dispatch);
      resetInputField();
    }
  };

  const resetInputField = (): void => {
    setSearchValue('');
  };

  return (
    <S.Container>
      <S.Title>Search For Any Movie</S.Title>
      <S.Input
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown}
        value={searchValue}
        placeholder='Search movies...'
        type='text'
      />
    </S.Container>
  );
};
