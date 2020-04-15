import styled from 'styled-components';

export const MovieItemStyles = () => {};

MovieItemStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;

  @media screen and (min-width: 800px) {
    margin: 0px 10px;
    min-width: 16vw;
  }
`;

MovieItemStyles.Poster = styled.img`
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 450px;
`;

MovieItemStyles.ButtonsContainer = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 99%;

  @media screen and (min-width: 800px) {
    display: none;

    ${MovieItemStyles.Container}:hover & {
      display: block;
    }
  }
`;
