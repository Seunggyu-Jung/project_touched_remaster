import { styled } from 'styled-components';

export const WritingDiv = styled.div`
  width: auto;
  margin-top: 80px;
  text-align: center;
`;

export const WritingForm = styled.form`
  margin-top: 20px;
`;

export const WritingArea = styled.textarea`
  &:focus {
    outline: none;
  }
  max-width: 400px;
  max-height: 400px;
  padding: 10px;
  resize: none;
  margin-bottom: 20px;
  border-radius: 10px;
`;
