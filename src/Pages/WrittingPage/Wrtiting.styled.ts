import { styled } from 'styled-components';

export const WritingDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;

export const WritingForm = styled.form`
  width: 400px;
  margin: auto;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 400px) {
    max-width: 300px;
  }
`;

export const WritingArea = styled.textarea`
  &:focus {
    outline: none;
  }
  display: block;
  width: 100%;
  height: 400px;
  padding: 10px;
  resize: none;
  margin-bottom: 20px;
  border-radius: 10px;
  background-size: contain;

  @media (max-width: 400px) {
    max-height: 300px;
    padding: 0;
  }
`;
