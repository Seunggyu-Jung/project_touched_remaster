import { styled } from 'styled-components';

export const modalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  a {
    box-sizing: border-box;
    border: 1px solid #5cffd1;
    border-radius: 10px;
    padding: 10px;
    text-decoration: none;
    color: black;

    &:hover {
      background-color: #00c3c1;
      color: #f2f2f2;
      transition: 0.7s;
    }
  }
`;

export const modalAnchor = styled.button`
  width: 100%;
  padding: 20px;
  background: none;
  border-radius: 10px;
  border: 1px solid black;

  &:hover {
    background-color: antiquewhite;
  }
`;
