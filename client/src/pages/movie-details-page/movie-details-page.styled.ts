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
  position: relative;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

MovieDetailsPageStyles.Poster = styled.img`
  display: flex;
  margin: 10% auto 0 auto;
  border: 5px solid #202020;
  border-radius: 5px;
  height: 175px;

  @media screen and (min-width: 800px) {
    margin: 0;
    height: unset;
  }
`;

MovieDetailsPageStyles.Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2%;

  @media screen and (min-width: 800px) {
    margin-left: 2%;
    max-width: 400px;
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

MovieDetailsPageStyles.Button = styled.button`
  font-size: 16px;
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.5;
  }
`;

MovieDetailsPageStyles.Arrow = styled.span`
  font-size: 20px;
`;
