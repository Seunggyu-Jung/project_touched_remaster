import { styled } from 'styled-components';
import { back } from '../../img/img';

export const guideDiv = styled.div`
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const guideSection = styled.section`
  width: auto;
  margin-bottom: 10px;
`;

export const guideTitle = styled.h2`
  margin: 0;
`;
