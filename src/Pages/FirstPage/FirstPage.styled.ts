import { styled } from 'styled-components';

export const mainDiv = styled.div`
  width: auto;
  height: auto;
  min-height: calc(100% - 200px);
  padding-bottom: 200px;
  text-align: center;
  background-color: #ffff;
`;

export const mainSection = styled.section``;

export const mainButton = styled.button`
  width: 100px;
  height: 100px;
  border: 0.5px solid #f2f2f2;
  border-radius: 10px;
  margin-top: 20px;

  :hover {
    opacity: 0.6;
    & {
      transform: rotate(1turn);
      transition: transform 1s;
    }
  }
`;

export const buttonImage = styled.img`
  width: 100%;
  height: 100%;
`;
