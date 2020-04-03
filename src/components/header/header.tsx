import React from 'react';

import { signInWithGoogle, signOut } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { HeaderStyles as S } from './header.styled';

export const Header: React.FC = () => {
  const { state, dispatch } = useAppState();
  const { currentUser } = state;

  return (
    <S.Container>
      <S.Title>PLACEHOLDER</S.Title>
      {currentUser ? (
        <button onClick={() => signOut(dispatch)}>SIGN OUT</button>
      ) : (
        <button onClick={() => signInWithGoogle(dispatch)}>SIGN IN</button>
      )}
    </S.Container>
  );
};
