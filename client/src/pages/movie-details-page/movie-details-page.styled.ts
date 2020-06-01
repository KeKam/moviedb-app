import styled from 'styled-components';

export const MovieDetailsPageStyles = () => {};

MovieDetailsPageStyles.Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 4% 2%;
  color: white;
  background-color: rgb(24, 24, 24);
  border-radius: 5px;
  padding: 2%;
  position: relative;

  @media screen and (min-width: 800px) {
    margin: 4% 2.5%;
    align-items: center;
    flex-direction: row;
  }
`;

MovieDetailsPageStyles.Poster = styled.img`
  margin: 10% auto 0 auto;
  border: 5px solid #202020;
  border-radius: 5px;
  height: 240px;
  width: 160px;

  @media screen and (min-width: 800px) {
    margin: 0;
    height: 350px;
    width: 240px;
  }
`;

MovieDetailsPageStyles.Details = styled.div`
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
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.5s ease;

  @media screen and (min-width: 800px) {
    right: 20px;

    &:hover {
      opacity: 0.5;
    }
  }
`;

MovieDetailsPageStyles.Arrow = styled.span`
  font-size: 20px;
`;
