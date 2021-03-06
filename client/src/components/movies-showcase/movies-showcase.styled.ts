import styled from 'styled-components';

export const MoviesShowcaseStyles = () => {};

MoviesShowcaseStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4% 2.5%;
  position: relative;
`;

MoviesShowcaseStyles.ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 4%;
`;

MoviesShowcaseStyles.Button = styled.button`
  font-size: 15px;
  background: rgb(32, 32, 32);
  height: 40px;
  width: 45%;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  transition: background 0.5s ease;
  margin: 0 10px;
  padding: 0;
  font-weight: 600;
  outline: none;

  @media screen and (min-width: 800px) {
    &:hover {
      background: ${(props) => (props.disabled ? '' : 'rgb(32, 32, 32, 0.5)')};
    }
  }
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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

MoviesShowcaseStyles.Error = styled.h2`
  color: white;
`;

MoviesShowcaseStyles.LoadingOverlay = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

MoviesShowcaseStyles.LoadingText = styled.h1`
  position: absolute;
  top: 35vh;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
