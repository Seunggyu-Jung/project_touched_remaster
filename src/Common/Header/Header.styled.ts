import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { guide2 } from '../../img/img';

export const headerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin: auto;
  background-color: none;
`;

export const header = styled.header`
  background-color: none;
  width: calc(100% - 600px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: relative;

  @media (max-width: 500px) {
    width: 100%;
    position: fixed;
    z-index: 1;
    background-color: #fff;

    h1 {
      font-size: 24px;
    }
  }
`;

export const homeBtn = styled(Link)`
  width: 70px;
  position: relative;
  background-image: url(${guide2});
  background-position: center;
  background-size: cover;
  :hover {
    & {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const hoveredText = styled.p`
  height: 100%;
  visibility: visible;
  background-color: #f2f2f2;
  border-radius: 6px;
  margin: auto;
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  z-index: 3;
  top: 0;
  opacity: 0;
  transition: opacity 0.3s;
  color: black;
`;

export const menuContainer = styled.section`
  height: 80px;
  display: flex;

  @media (max-width: 500px) {
    width: 80px;
    flex-direction: column;
  }
`;

export const menuButton = styled.button`
  width: 80px;
  height: 80px;
  position: absolute;
  right: 0;
  background-color: #5cffd1;
  border: 0;
  border-radius: 10px 10px 10px 10px;
  z-index: 2;
  cursor: pointer;

  :focus {
    border: 0;
    outline: none;
  }

  .menu-trigger {
  }
  .menu-trigger,
  .menu-trigger span {
    display: inline-block;
    transition: all 0.4s;
    box-sizing: border-box;
  }

  .menu-trigger {
    position: relative;
    width: 50px;
    height: 44px;
  }

  .menu-trigger span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: black;
    border-radius: 4px;
  }

  .menu-trigger span:nth-of-type(1) {
    top: 0;
  }

  .menu-trigger span:nth-of-type(2) {
    top: 20px;
  }

  .menu-trigger span:nth-of-type(3) {
    bottom: 0;
  }

  .menu-trigger.active-1 span:nth-of-type(1) {
    -webkit-transform: translateY(20px) rotate (-45deg);
    transform: translateY(20px) rotate(-45deg);
  }

  .menu-trigger.active-1 span:nth-of-type(2) {
    opacity: 0;
  }

  .menu-trigger.active-1 span:nth-of-type(3) {
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-20px) rotate(45deg);
  }
`;

export const headerUl = styled.ul<{ menuVisible: boolean }>`
  display: flex;
  flex-direction: column;
  list-style: none;
  border-radius: 0 0 10px 10px;
  z-index: 1;

  @keyframes dropdown {
    0% {
      transform: translateY(-100%);
      display: none;
    }
    100% {
      transform: translateY(0);
      background-color: #ffff;
    }
  }

  @keyframes scrollup {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
      background-color: none;
      display: none;
    }
  }

  animation: ${(props) =>
    props.menuVisible
      ? 'dropdown 0.4s ease forwards'
      : 'scrollup 0.4s ease-in forwards'};

  & {
    position: absolute;
    box-sizing: border-box;
    padding: 10px 0;
    top: 65px;
    right: 0;
    width: 80px;

    ::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: #5cffd1;
      transition: width 0.2s ease-out;
    }

    :hover::after {
      width: 100%;
      transition: width 0.2s ease;
    }
  }
  gap: 30px;
`;

export const headerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
