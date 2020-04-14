import styled from 'styled-components';

export const MoviesShowcaseStyles = () => {};

MoviesShowcaseStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

MoviesShowcaseStyles.Movies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.5px;
  }
`;
