import styled from 'styled-components';

import { ButtonProps } from './custom-button';

export const CustomButtonStyles = () => {};

CustomButtonStyles.Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.addToFavourites
      ? 'green'
      : props.removeFromFavourites
      ? 'red'
      : '#2b61a7'};
  color: white;
  width: 80%;
  height: 15%;
  border: none;
  border-radius: 30px;
  margin: 33% auto 0 auto;
  font-weight: bold;
  cursor: pointer;
`;
