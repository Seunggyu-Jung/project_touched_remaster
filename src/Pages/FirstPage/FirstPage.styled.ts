import { styled } from 'styled-components';

export const mainDiv = styled.div`
  width: auto;
  margin-top: 80px;
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

export const carouselController = styled.section`
  display: flex;
  justify-content: center;
  border-radius: 50px;
  position: absolute;
  bottom: 80px;
  left: 200px;
  background-color: #f2f2f2;
  font-weight: bold;

  button {
    border: 0;
    background-color: transparent;
    font-size: 24px;
  }

  @media (max-width: 500px) {
    bottom: 40px;
    left: 150px;
  }
`;

export const buttonImage = styled.img`
  width: 100%;
  height: 100%;
`;
