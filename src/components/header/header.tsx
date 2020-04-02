import React from 'react';

import { signInWithGoogle } from '../../store/actions';
import { useAppState } from '../../hooks/useAppState';
import { HeaderStyles as S } from './header.styled';

export const Header: React.FC = () => {
  const { dispatch } = useAppState();

  return (
    <S.Container>
      <S.Title>PLACEHOLDER</S.Title>
      <button onClick={() => signInWithGoogle(dispatch)}>SIGN IN</button>
    </S.Container>
  );
};
