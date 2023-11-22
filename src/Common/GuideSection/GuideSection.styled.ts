import { styled } from 'styled-components';
import { back } from '../../img/img';

export const guideDiv = styled.section`
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

export const guideSteps = styled.p`
  width: auto;
  margin-bottom: 5px;
  text-align: start;
  padding-left: 7px;
  word-break: break-all;
  font-size: 16px;
  font-weight: bold;
`;

export const guideTitle = styled.h2`
  margin: 0;
`;
