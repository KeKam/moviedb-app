import React, { useState, useEffect } from 'react';

import { useAppState } from '../../hooks/useAppState';
import { fetchSearchMovies } from '../../store/actions';
import { SearchBarStyles as S } from './search-bar.styled';

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const { dispatch } = useAppState();

  useEffect(() => {
    fetchSearchMovies('man', dispatch);
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    fetchSearchMovies(searchValue, dispatch);
    resetInputField();
  };

  const resetInputField = (): void => {
    setSearchValue('');
  };

  return (
    <S.Container>
      <form>
        <input onChange={handleInputChange} value={searchValue} type='text' />
        <button onClick={handleOnClick} type='submit'>
          Search
        </button>
      </form>
    </S.Container>
  );
};
