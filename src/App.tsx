import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/FirstPage/FirstPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import WrittingPage from './Pages/WrittingPage/WrittingPage';
import TestPage from './Pages/TestPage/TestPage';
import ImagePage from './Pages/ImagePage/ImagePage';
import BackgroundPage from './Pages/BackgroundPage/BackgroundPage';
import { useRecoilValue } from 'recoil';
import { backgroundState } from './Pages/recoil';
import { createGlobalStyle } from 'styled-components'


function App() {

  const background = useRecoilValue(backgroundState)

  const GlobalStyles = createGlobalStyle`
  body {
    height: 900px;
    background: linear-gradient(to bottom, ${background[0]} , ${background[1]});

    @media (max-width: 400px) {
    body {
      height: 500px;
    }
  }
  }`


  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/write" element={<WrittingPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/image" element={<ImagePage />}></Route>
          <Route path="/background" element={<BackgroundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
