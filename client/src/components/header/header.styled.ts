import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyles = () => {};

HeaderStyles.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  border-bottom: 2px solid rgb(24, 24, 24);
  color: white;

  @media screen and (min-width: 800px) {
    justify-content: unset;
  }
`;

HeaderStyles.Title = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;

  @media screen and (min-width: 800px) {
    display: flex;
    min-width: 10vw;
    margin-left: 18%;
  }
`;

HeaderStyles.Options = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
`;

HeaderStyles.Option = styled(Link)`
  font-size: 1.4em;
  color: white;
  text-decoration: none;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 800px) {
    margin-right: 2%;
  }
`;

HeaderStyles.Button = styled.button`
  font-size: 1.4em;
  font-weight: 400;
  padding: 0;
  color: white;
  border: none;
  background: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 800px) {
    margin-right: 2%;
  }
`;

HeaderStyles.Hamburger = styled.div`
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0.8em;
  color: #ffffff;
  border: 0;
  font-size: 1.4em;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  z-index: 10000000000000;

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

HeaderStyles.Cross = styled(HeaderStyles.Hamburger)`
  padding: 0.35em 0.45em;
  font-size: 3em;
  height: 65px;
  transition: all 0.5s ease;
`;

HeaderStyles.HamburgerMenu = styled.div`
  z-index: 1000000;
  font-weight: bold;
  font-size: 0.8em;
  left: 0;
  width: 100%;
  position: absolute;
`;

HeaderStyles.MenuList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style-image: none;
`;

HeaderStyles.MenuItem = styled.li`
  display: block;
  padding: 15px 0 15px 0;
  background: #000;
  text-align: center;
  border-bottom: 2px solid rgb(24, 24, 24);
  transition: all 0.5s ease;

  &:first-child {
    border-top: 2px solid rgb(24, 24, 24);
  }

  &:hover {
    background: #202020;
  }
`;
