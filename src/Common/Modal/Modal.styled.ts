import { styled, css } from 'styled-components';

export const modalBox = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
