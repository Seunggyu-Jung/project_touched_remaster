import styled from 'styled-components';

export const commonDiv = styled.div`
  width: auto;
  height: auto;
  min-height: calc(100% - 200px);
  padding-bottom: 200px;
  margin: auto;
  margin-top: 80px;
  text-align: center;
  justify-content: center;
  align-items: center;

  h1 {
    text-shadow: 10px 10px 10px #5cffd1;
  }

  span {
    font-style: italic;
    box-sizing: border-box;
    box-shadow: inset 0 -0.6em #5cffd1;
    border-bottom: 2px solid #00c3c1;
  }

  button {
    border: 1px solid #5cffd1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 5px;
    cursor: pointer;
    outline: none;
    font-family: inherit;
    font-size: 20px;

    &:hover {
      background-color: #00c3c1;
      color: #f2f2f2;
      transition: 0.5s;
    }
  }
`;
