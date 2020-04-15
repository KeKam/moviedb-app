import styled from 'styled-components';

export const FavouritesPageStyles = () => {};

FavouritesPageStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0px;
`;

FavouritesPageStyles.Favourites = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 15px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 0.5px;
  }
`;
