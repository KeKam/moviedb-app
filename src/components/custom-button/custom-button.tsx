import React from 'react';

import { CustomButtonStyles as S } from './custom-button.styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  addToFavourites?: boolean;
  removeFromFavourites?: boolean;
}

export const CustomButton: React.FC<ButtonProps> = ({
  children,
  ...buttonProps
}) => <S.Container {...buttonProps}>{children}</S.Container>;
