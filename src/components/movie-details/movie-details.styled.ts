import styled from 'styled-components';

export const MovieDetailsStyles = (): void => {};

MovieDetailsStyles.Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

MovieDetailsStyles.DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  height: 85%;
  padding: 0px 20px;
  margin: auto;
  border-radius: 15px;

  @media screen and (min-width: 800px) {
    width: 70%;
  }
`;

MovieDetailsStyles.Details = styled.div`
  font-size: 8.5px;
  width: 50%;
  height: 65%;
  margin-left: 10px;

  @media screen and (min-width: 800px) {
    font-size: 15px;
    margin-left: 30px;
    height: 85%;
  }
`;

MovieDetailsStyles.Poster = styled.img`
  width: 50%;
  height: 65%;

  @media screen and (min-width: 800px) {
    width: 50%;
    height: 85%;
  }
`;

MovieDetailsStyles.Title = styled.h2`
  display: flex;
  justify-content: center;
  margin: 0;
`;
