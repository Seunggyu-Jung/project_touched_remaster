import styled from 'styled-components';

export const controllSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    border: 1px solid #5cffd1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: #00c3c1;
      color: #f2f2f2;
      transition: 0.5s;
    }
  }
`;

export const textImg = styled.img`
  max-width: 100%;
  height: auto;
`;
