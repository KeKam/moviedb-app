import styled from 'styled-components';

export const MovieDetailsPageStyles = () => {};

MovieDetailsPageStyles.Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 4% 2%;
  color: white;
  background-color: rgb(24, 24, 24);
  border-radius: 5px;
  padding: 2%;

  @media screen and (min-width: 800px) {
    margin: 2%;
  }
`;

MovieDetailsPageStyles.DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

MovieDetailsPageStyles.Poster = styled.img`
  display: flex;
  margin: 10% auto 0 auto;
  border: 5px solid #202020;
  border-radius: 5px;
  width: 60%;
  height: 60%;

  @media screen and (min-width: 800px) {
    width: 70%;
    height: 70%;
    margin: 0;
  }
`;

MovieDetailsPageStyles.Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2%;

  @media screen and (min-width: 800px) {
    margin-left: 2%;
  }
`;

MovieDetailsPageStyles.Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

MovieDetailsPageStyles.Text = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 13px;

  @media screen and (min-width: 800px) {
    justify-content: left;
    text-align: unset;
  }
`;
