import styled from 'styled-components';

export const SearchBarStyles = () => {};

SearchBarStyles.Container = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    width: 30%;
  }
`;

SearchBarStyles.Input = styled.input`
  width: 100%;
  height: 30px;
  font-size: 1em;
  text-align: center;
  border: none;
  padding: 5px 0;
  background: rgb(32, 32, 32);
  color: white;
  font-weight: 600;
  outline: none;
  transition: background 0.5s ease;

  &:focus {
    background: white;
    color: black;
  }

  @media screen and (min-width: 800px) {
    border-radius: 20px;
    width: 90%;
  }
`;

SearchBarStyles.Title = styled.h2`
  font-size: 20px;
  margin-top: 0;
  color: white;

  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
`;
