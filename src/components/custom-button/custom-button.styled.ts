import styled from 'styled-components';

import { ButtonProps } from './custom-button';

export const CustomButtonStyles = () => {};

CustomButtonStyles.Container = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  background: ${(props) =>
    props.addToFavourites
      ? '#5cb85c'
      : props.removeFromFavourites
      ? '#d9534f'
      : '#428bca'};
  color: white;
  width: 134.5px;
  height: 40px;
  border: none;
  font-size: 15px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`;
