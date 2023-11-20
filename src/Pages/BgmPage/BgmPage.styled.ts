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

export const bgmDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;
