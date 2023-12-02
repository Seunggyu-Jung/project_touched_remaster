import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/FirstPage/FirstPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import WrittingPage from './Pages/WrittingPage/WrittingPage';
import TestPage from './Pages/TestPage/TestPage';
import ImagePage from './Pages/ImagePage/ImagePage';
import BackgroundPage from './Pages/BackgroundPage/BackgroundPage';
import CheckPage from './Pages/CheckPage/CheckPage';
import BgmPage from './Pages/BgmPage/BgmPage';
import { useRecoilValue } from 'recoil';
import { backgroundState } from './Pages/recoil';
import { createGlobalStyle } from 'styled-components'
import ScrollToTop from './Common/ScrollToTop/ScrollToTop';


function App() {

  const background = useRecoilValue(backgroundState)

  const GlobalStyles = createGlobalStyle`
    body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    word-break: keep-all;
  }

  body::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${background[0]}, ${background[1]});
    z-index: -1;
  }

  `

  return (
    <>
      <GlobalStyles />
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/info" element={<InfoPage />}></Route>
          <Route path="/write" element={<WrittingPage />}></Route>
          <Route path="/test" element={<TestPage />}></Route>
          <Route path="/image" element={<ImagePage />}></Route>
          <Route path="/background" element={<BackgroundPage />}></Route>
          <Route path="/check" element={<CheckPage />}></Route>
          <Route path="/bgm" element={<BgmPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
