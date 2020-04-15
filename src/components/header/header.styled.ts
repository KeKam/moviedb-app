import styled from 'styled-components';

export const HeaderStyles = () => {};

HeaderStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  height: 80px;
  font-size: 15px;
  color: white;

  @media screen and (min-width: 800px) {
    font-size: 30px;
    height: 100px;
  }
`;

HeaderStyles.Title = styled.h1`
  margin: 0;
`;
