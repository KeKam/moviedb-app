import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyles = () => {};

HeaderStyles.Container = styled.div`
  background: #000;
  border-bottom: 2px solid rgb(24, 24, 24);
  color: white;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

HeaderStyles.Title = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 4px 0;

  @media screen and (min-width: 800px) {
    display: flex;
    width: 10%;
    margin: 0 25px;
  }
`;

HeaderStyles.Options = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;
  }
`;

HeaderStyles.Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

HeaderStyles.Option = styled(Link)`
  font-size: 1.4em;
  color: white;
  text-decoration: none;
  font-weight: 600;

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    margin-right: 25px;
    height: 100%;
  }
`;

HeaderStyles.Button = styled.button`
  font-size: 1.4em;
  font-weight: 600;
  padding: 0;
  color: white;
  border: none;
  background: none;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    margin-right: 25px;
    height: 100%;
  }
`;

HeaderStyles.Hamburger = styled.div`
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0.8em 1em;
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
  padding: 0.36em 0.45em 0 0.45em;
  font-size: 3em;
`;

HeaderStyles.HamburgerMenu = styled.div`
  z-index: 1000000;
  font-weight: bold;
  font-size: 0.8em;
  top: 68px;
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

HeaderStyles.OptionsContainer = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`;
