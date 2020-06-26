import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { CustomButtonStyles as S } from './custom-button.styled';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  addToFavourites?: boolean;
  removeFromFavourites?: boolean;
  fetchMovie?: boolean;
}

export const CustomButton = ({
  children,
  ...buttonProps
}: ButtonProps): JSX.Element => (
  <S.Container {...buttonProps}>{children}</S.Container>
);
