import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: center;
  background-color: rgb(24, 24, 24);
  border-radius: 5px;

  @media screen and (min-width: 800px) {
    min-width: 16vw;
  }
`;

MovieItemStyles.Poster = styled.img`
  width: 80%;
  height: 350px;
  margin-top: 10%;
  border: 5px solid #202020;
  border-radius: 5px;
`;

MovieItemStyles.ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10%;
  width: 100%;
`;
