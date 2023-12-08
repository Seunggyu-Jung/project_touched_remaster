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
