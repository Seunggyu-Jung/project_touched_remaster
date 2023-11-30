import { styled } from 'styled-components';

export const WritingDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;

export const hideSection = styled.section`
  display: block;
`;

export const WritingForm = styled.form`
  width: 400px;
  margin: auto;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const WritingArea = styled.textarea`
  &:focus {
    outline: none;
  }
  display: block;
  max-width: 100%;
  height: 380px;
  margin-top: 20px;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  background: none;
  border: 0;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
