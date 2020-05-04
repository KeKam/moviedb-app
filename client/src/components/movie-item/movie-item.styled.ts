import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  background: rgb(24, 24, 24);
  border-radius: 10px;

  @media screen and (min-width: 800px) {
    min-width: 25%;
  }
`;

MovieItemStyles.Poster = styled.img`
  width: 70%;
  height: 175px;
  margin-top: 10%;
  border: 5px solid #202020;
  border-radius: 10px;

  @media screen and (min-width: 500px) {
    width: 80%;
    height: 350px;
  }
`;

MovieItemStyles.ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 5% 0 10% 0;
  width: 100%;
`;
