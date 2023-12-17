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
  border: 1px solid #5cffd1;
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

export const guideImg = styled.img``;

export const BtnSection = styled.section`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
    width: 90px;
    height: 30px;
    border: 1px solid #5cffd1;
    border-radius: 10px;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;

    &:hover {
      background-color: #00c3c1;
      color: #f2f2f2;
      transition: 0.7s;
    }
  }
`;

export const answerAgian = styled.button`
  max-width: 300px;
  margin: auto;
  display: block;
  box-sizing: border-box;
  border: 1px solid #5cffd1;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #00c3c1;
    color: #f2f2f2;
    transition: 0.7s;
  }
`;
