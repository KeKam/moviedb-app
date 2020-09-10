import React, { useState, useRef, useEffect } from 'react';

import { SearchBar } from '../search-bar/search-bar';
import { signInWithGoogle, startSignOut } from '../../actions/user.actions';
import { useAppState } from '../../hooks/use-app-state';
import { HeaderStyles as S } from './header.styled';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { state, dispatch } = useAppState();
  const { currentUser, isFetching } = state;

  useEffect(() => {
    document.body.addEventListener('click', handleOnBodyClick);

    return () => {
      document.body.removeEventListener('click', handleOnBodyClick);
    };
  }, []);

  const handleOnBodyClick = (e: MouseEvent): void => {
    if (ref.current && ref.current.contains(e.target as Node)) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <S.Container ref={ref}>
      <S.Title to='/'>
        <h2>MovieDB</h2>
      </S.Title>

      {isOpen ? (
        <S.Cross onClick={() => setIsOpen(false)}>&#735;</S.Cross>
      ) : (
        <S.Hamburger onClick={() => setIsOpen(true)}>&#9776;</S.Hamburger>
      )}

      {isOpen ? (
        <S.HamburgerMenu>
          {currentUser ? (
            <>
              <S.MenuItem>
                <S.Option to='/'>Home</S.Option>
              </S.MenuItem>
              <S.MenuItem>
                <S.Option to='/favourites'>Favourites</S.Option>
              </S.MenuItem>
              <S.MenuItem>
                <S.Button onClick={() => startSignOut(dispatch)}>
                  Sign out
                </S.Button>
              </S.MenuItem>
            </>
          ) : (
            <>
              <S.MenuItem>
                <S.Option to='/'>Home</S.Option>
              </S.MenuItem>
              <S.MenuItem>
                <S.Button onClick={() => signInWithGoogle(dispatch)}>
                  Sign in
                </S.Button>
              </S.MenuItem>
            </>
          )}
        </S.HamburgerMenu>
      ) : null}

      <S.OptionsContainer>
        {isFetching ? null : currentUser ? (
          <>
            <SearchBar />
            <S.Options>
              <S.Option to='/'>Home</S.Option>
              <S.Option to='/favourites'>Favourites</S.Option>
              <S.Button onClick={() => startSignOut(dispatch)}>
                Sign out
              </S.Button>
            </S.Options>
          </>
        ) : (
          <>
            <SearchBar />
            <S.Options>
              <S.Option to='/'>Home</S.Option>
              <S.Option to='/favourites'>Favourites</S.Option>
              <S.Button onClick={() => signInWithGoogle(dispatch)}>
                Sign in
              </S.Button>
            </S.Options>
          </>
        )}
      </S.OptionsContainer>
    </S.Container>
  );
};
