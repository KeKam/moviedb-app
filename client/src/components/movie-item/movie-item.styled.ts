import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  background: rgb(24, 24, 24);
  border-radius: 5px;
  height: 100%;
  width: 100%;

  @media screen and (min-width: 800px) {
    min-width: 25%;
    max-width: 310px;
  }
`;

MovieItemStyles.Poster = styled.img`
  width: 80%;
  height: 100%;
  min-height: 209px;
  max-height: 330px;
  margin-top: 10%;
  border: 5px solid #202020;

  @media screen and (min-width: 800px) {
    height: 330px;
  }
`;

MovieItemStyles.ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5% 0 10% 0;
  width: 100%;
`;

MovieItemStyles.PosterContainer = styled.div`
  width: 70%;
`;
