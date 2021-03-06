import styled from 'styled-components';

import { ButtonProps } from './custom-button';

export const CustomButtonStyles = () => {};

CustomButtonStyles.Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.addToFavourites
      ? 'rgb(92, 184, 92)'
      : props.removeFromFavourites
      ? 'rgb(217, 83, 79)'
      : 'rgb(66, 139, 202)'};
  color: white;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  width: 45%;
  height: 30px;
  border: none;
  font-size: 13px;
  padding: 0;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease;

  @media screen and (min-width: 800px) {
    &:hover {
      background: ${(props) =>
        props.addToFavourites && props.disabled
          ? 'rgb(92, 184, 92)'
          : props.removeFromFavourites
          ? 'rgb(217, 83, 79, 0.5)'
          : props.fetchMovie
          ? 'rgb(66, 139, 202, 0.5)'
          : props.addToFavourites
          ? 'rgb(92, 184, 92, 0.5)'
          : 'unset'};
    }
  }
`;
