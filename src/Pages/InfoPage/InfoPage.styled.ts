import { styled } from 'styled-components';

export const InfoDiv = styled.div`
  width: auto;
  margin-top: 80px;
  height: auto;
  min-height: calc(100% - 200px);
  padding-bottom: 200px;
  text-align: center;
`;

export const InfoForm = styled.form`
  max-width: 400px;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #f2f2f2;
  position: relative;
`;

export const InfoInput = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  margin-left: 10px;
  position: relative;
`;

export const InfoCheck = styled.p`
  position: absolute;
  width: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 5px;
  top: 40px;
  right: 30px;
  transition: 0.5s;
`;

export const InfoCheck2 = styled.p`
  position: absolute;
  width: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 5px;
  top: 130px;
  right: 30px;
  transition: 0.5s;
`;
