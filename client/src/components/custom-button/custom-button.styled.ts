import styled from 'styled-components';

import { ButtonProps } from './custom-button';

export const CustomButtonStyles = () => {};

CustomButtonStyles.Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.addToFavourites
      ? 'rgb(92, 184, 92)'
      : props.removeFromFavourites
      ? 'rgb(217, 83, 79)'
      : 'rgb(66, 139, 202)'};
  color: white;
  width: 45%;
  height: 30px;
  border: none;
  font-size: 13px;
  padding: 0;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s ease;

  @media screen and (min-width: 600px) {
    width: 134.5px;
    height: 40px;
    font-size: 15px;
    margin: 0 10px;
  }

  @media screen and (min-width: 800px) {
    &:hover {
      background: ${(props) =>
        props.addToFavourites
          ? 'rgb(92, 184, 92, 0.5)'
          : props.removeFromFavourites
          ? 'rgb(217, 83, 79, 0.5)'
          : 'rgb(66, 139, 202, 0.5)'};
    }
  }
`;
