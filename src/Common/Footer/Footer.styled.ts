import styled from 'styled-components';

export const footer = styled.footer`
  position: relative;
  transform: translateY(-100%);
  background-color: #f2f2f2;
  font-size: 12px;
`;

export const footerTitle = styled.h1`
  font-size: 12px;
`;

export const footerSection = styled.section`
  width: calc(100% - 400px);
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const contectButton = styled.button`
  width: 100px;
  padding: 20px;
  background: none;
  border-radius: 10px;
  border: 1px solid black;

  &:hover {
    background-color: antiquewhite;
  }
`;

export const modalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const modalAnchor = styled.button`
  width: 100%;
  padding: 20px;
  background: none;
  border-radius: 10px;
  border: 1px solid black;

  &:hover {
    background-color: antiquewhite;
  }
`;
