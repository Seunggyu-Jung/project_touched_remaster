import { styled } from 'styled-components';
import { back } from '../../img/img';

export const bgmGuide = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const pcGuide = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const mobileGuide = styled.section`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const guideTitle = styled.h2`
  margin: 0;
`;

export const bgmSection = styled.section`
  display: block;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f2f2f2;

  input {
    border: 1px solid #5cffd1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    outline: none;
    margin-right: 10px;
  }

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
