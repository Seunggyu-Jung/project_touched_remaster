import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const headerWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80px;
`;

export const header = styled.header`
  border-bottom: 1px solid black;
  width: calc(100% - 200px);
  height: 80px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  padding: 10px 0;

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
`;

export const headerUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: #ffff;
  & {
    padding: 0;
    position: absolute;
    top: 75px;
    right: 10px;
    transition: 0.5s es;
  }
  gap: 30px;
`;

export const headerLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
