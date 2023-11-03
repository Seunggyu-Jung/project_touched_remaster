import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/FirstPage/FirstPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import WrittingPage from './Pages/WrittingPage/WrittingPage';
import TestPage from './Pages/TestPage/TestPage';
import ImagePage from './Pages/ImagePage/ImagePage';
import BackgroundPage from './Pages/BackgroundPage/BackgroundPage';
import CheckPage from './Pages/CheckPage/CheckPage';
import { useRecoilValue } from 'recoil';
import { backgroundState } from './Pages/recoil';
import { createGlobalStyle } from 'styled-components'


function App() {

  const background = useRecoilValue(backgroundState)

  const GlobalStyles = createGlobalStyle`
    body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${background[0]} , ${background[1]});
  }
  `


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
          <Route path="/check" element={<CheckPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
