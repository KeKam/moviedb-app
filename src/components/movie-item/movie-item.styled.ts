import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  margin: auto;
`;

MovieItemStyles.Title = styled.h2`
  text-align: center;
`;

MovieItemStyles.Poster = styled.img`
  height: 350px;

  @media screen and (min-width: 800px) {
    height: 445px;
  }
`;
