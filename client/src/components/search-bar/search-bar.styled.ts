import styled from 'styled-components';

export const SearchBarStyles = () => {};

SearchBarStyles.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vh;
  width: 95%;
  margin: 2% auto;
  border-radius: 10px;

  @media screen and (min-width: 800px) {
    width: 80%;
  }
`;

SearchBarStyles.Input = styled.input`
  display: flex;
  position: relative;
  width: 60%;
  height: 15%;
  font-size: 1em;
  text-align: center;
  border: none;
  border-radius: 10px;
  padding: 15px;
`;

SearchBarStyles.Title = styled.h2`
  font-size: 20px;
  color: white;

  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
`;
