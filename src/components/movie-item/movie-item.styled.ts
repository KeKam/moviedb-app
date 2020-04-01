import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  margin: auto;

  @media screen and (min-width: 800px) {
    margin: unset;
  }
`;

MovieItemStyles.Poster = styled.img`
  background-size: cover;
  background-position: center;
  width: 300px;
  height: 450px;
`;
