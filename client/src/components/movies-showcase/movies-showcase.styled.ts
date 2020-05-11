import styled from 'styled-components';

export const MoviesShowcaseStyles = () => {};

MoviesShowcaseStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4% 2.5%;
`;

MoviesShowcaseStyles.Movies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 1234px) and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px;
  }

  @media screen and (min-width: 1235px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

MoviesShowcaseStyles.Error = styled.h2`
  color: white;
`;
