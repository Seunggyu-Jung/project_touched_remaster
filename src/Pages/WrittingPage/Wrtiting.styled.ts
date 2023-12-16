import { styled } from 'styled-components';

export const hiddingBtn = styled.button`
  margin-bottom: 20px;
  border: 1px solid #5cffd1;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #00c3c1;
    color: #f2f2f2;
    transition: 0.7s;
  }
`;

export const hideSection = styled.section`
  display: block;
  max-width: 400px;
  margin: auto;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f2f2f2;

  select {
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

    option {
      background-color: #f2f2f2;
      color: black;
      outline: none;
      border: 1px solid #5cffd1;
    }
  }
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
