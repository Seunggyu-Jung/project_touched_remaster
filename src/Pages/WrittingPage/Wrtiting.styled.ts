import { styled } from 'styled-components';

export const WritingDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;

export const WritingForm = styled.form`
  width: 400px;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 500px) {
    max-width: 100%;
  }
`;

export const WritingArea = styled.textarea`
  &:focus {
    outline: none;
  }
  display: block;
  width: 100%;
  height: 400px;
  resize: none;
  margin-bottom: 20px;
  border-radius: 10px;
  background-size: contain;

  @media (max-width: 500px) {
    max-height: 400px;
    padding: 0;
  }
`;
