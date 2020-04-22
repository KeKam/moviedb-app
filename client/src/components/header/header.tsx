import React, { useState } from 'react';

import { signInWithGoogle, signOut } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { HeaderStyles as S } from './header.styled';

export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useAppState();
  const { currentUser } = state;

  return (
    <S.Container>
      <div>
        <S.Title to='/'>
          <h2>MovieDB</h2>
        </S.Title>
        <div>
          {isOpen ? (
            <S.Cross onClick={() => setIsOpen(false)}>&#735;</S.Cross>
          ) : (
            <S.Hamburger onClick={() => setIsOpen(true)}>&#9776;</S.Hamburger>
          )}
          {isOpen ? (
            <S.HamburgerMenu>
              <S.MenuList>
                <S.MenuItem>
                  <S.Option to='/'>Home</S.Option>
                </S.MenuItem>
                <S.MenuItem>
                  <S.Option to='/favourites'>Favourites</S.Option>
                </S.MenuItem>
                <S.MenuItem>
                  {currentUser ? (
                    <S.Button onClick={() => signOut(dispatch)}>
                      Sign out
                    </S.Button>
                  ) : (
                    <S.Button onClick={() => signInWithGoogle(dispatch)}>
                      Sign in
                    </S.Button>
                  )}
                </S.MenuItem>
              </S.MenuList>
            </S.HamburgerMenu>
          ) : null}
        </div>
      </div>
      <S.Options>
        <S.Option to='/'>Home</S.Option>
        <S.Option to='/favourites'>Favourites</S.Option>
        {currentUser ? (
          <S.Button onClick={() => signOut(dispatch)}>Sign out</S.Button>
        ) : (
          <S.Button onClick={() => signInWithGoogle(dispatch)}>
            Sign in
          </S.Button>
        )}
      </S.Options>
    </S.Container>
  );
};
