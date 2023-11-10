import { styled } from 'styled-components';

export const checkDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;

export const textSection = styled.section`
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  border: 1px solid transparent;
  position: relative;
  background-color: #ffff;

  ::after {
    content: '';
    position: absolute;
    bottom: -18%;
    right: 15%;
    border-top: 20px solid #ffff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 0px solid transparent;
  }
`;

export const guideImg = styled.img`
  transition: opacity 1s ease-in-out;
`;

export const BtnSection = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const falseText = styled.section`
  max-width: 300px;
  margin: auto;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: #ffff;
`;

export const answerAgian = styled.button`
  border: 0;
  background-color: transparent;
`;
