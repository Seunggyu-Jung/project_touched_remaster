import styled from 'styled-components';

export const backgroundDiv = styled.div`
  max-width: 800px;
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

  button {
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
  }
`;

export const controllSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;

  button {
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
  }
`;

export const textImg = styled.img`
  max-width: 100%;
  height: auto;
`;
