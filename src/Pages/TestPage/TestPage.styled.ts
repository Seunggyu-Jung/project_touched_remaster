import { styled, keyframes } from 'styled-components';

export const testDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;

  button {
    margin: 20px 0;
    border: 1px solid #5cffd1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    font-size: 20px;

    &:hover {
      background-color: #00c3c1;
      color: #f2f2f2;
      transition: 0.5s;
    }
  }
`;

export const testSection = styled.section`
  position: relative;
  max-width: 400px;
  margin: auto;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
  background-size: contain;
  background-color: #ffff;

  @media (max-width: 400px) {
    max-width: 300px;
    height: 350px;
  }
`;

export const userPtag = styled.p`
  position: absolute;
  top: -7%;
  left: 3%;
  margin: 0;
  overflow: visible;
  font-size: 24px;
  @media (max-width: 400px) {
    top: -9%;
  }
`;

export const textBox = styled.div`
  text-align: justify;
  padding: 10px;
  height: 380px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media (max-width: 400px) {
    height: 280px;
  }
`;

const drawLine = keyframes`
  from {
    stroke-dashoffset: 4810;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

export const path = styled.path`
  fill: none;
  stroke: gold;
  stroke-width: 10px;
  stroke-linecap: round;
  stroke-dasharray: 4810 4810;
  animation: ${drawLine} 5s linear infinite;
`;

export const photoBox = styled.section`
  max-width: 400px;
  margin: auto;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
`;
