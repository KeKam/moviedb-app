import styled from 'styled-components';

export const SearchBarStyles = () => {};

SearchBarStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 25vh;
  margin: 4% 2.5% 0 2.5%;
  border-radius: 10px;
`;

SearchBarStyles.Input = styled.input`
  display: flex;
  position: relative;
  width: 60%;
  height: 15%;
  font-size: 1em;
  text-align: center;
  border: none;
  border-radius: 20px;
  padding: 15px;
`;

SearchBarStyles.Title = styled.h2`
  font-size: 20px;
  margin-top: 0;
  color: white;

  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
`;

SearchBarStyles.ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
`;

SearchBarStyles.Button = styled.button`
  font-size: 15px;
  background: rgb(32, 32, 32);
  height: 40px;
  width: 45%;
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  transition: all 0.5s ease;
  margin: 0 10px;

  @media screen and (min-width: 800px) {
    &:hover {
      background: ${(props) => (props.disabled ? '' : 'rgb(32, 32, 32, 0.5)')};
    }
  }
`;
