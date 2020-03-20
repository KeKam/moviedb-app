import React, { useState } from 'react';

export const SearchBar: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    resetInputField();
  };

  const resetInputField = (): void => {
    setSearchValue('');
  };

  return (
    <form>
      <input onChange={handleInputChange} value={searchValue} type='text' />
      <button onClick={handleOnClick} type='submit'>
        Search
      </button>
    </form>
  );
};
