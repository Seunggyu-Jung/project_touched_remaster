import styled from 'styled-components';

export const btnSection = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  box-sizing: border-box;
  padding: 10px;
`;

export const btnButton = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid #5cffd1;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #00c3c1;
    color: #f2f2f2;
    transition: 0.7s;
  }
`;
