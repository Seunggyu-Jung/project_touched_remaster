import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const headerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  margin: auto;
  background-color: #ffff;
`;

export const header = styled.header`
  background-color: #ffff;
  width: calc(100% - 600px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  z-index: 1;

  @media (max-width: 500px) {
    width: 100%;
  }
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
  background-color: salmon;
  border: 0;
  border-radius: 10px 10px 10px 10px;
  z-index: 1;

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
    background-color: #fff;
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

  /* type-01 */
  /* 중앙 라인이 고정된 자리에서 투명하게 사라지며 상하라인 회전하며 엑스자 만들기 */
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
  background-color: #ffff;
  border-radius: 0 0 10px 10px;

  @keyframes dropdown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes scrollup {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  animation: ${(props) =>
    props.menuVisible
      ? 'dropdown 0.4s ease forwards'
      : 'scrollup 0.4s ease-in forwards'};

  & {
    padding: 0;
    position: absolute;
    top: 65px;
    right: 0;
    width: 80px;

    ::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background-color: salmon;
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
