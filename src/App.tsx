import React, { useState, useEffect } from 'react';
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
  const [bodyHeight, setBodyHeight] = useState<string | number>('900px');

  const GlobalStyles = createGlobalStyle`
  body {
    height: ${bodyHeight};
    background: linear-gradient(to bottom, ${background[0]} , ${background[1]});

    @media (max-width: 400px) {
    body {
      height: 500px;
    }
  }

  }`

  const handleResize = () => {
    const contentHeight = document.documentElement.clientHeight;
    const contentWidth = document.documentElement.clientWidth;
    if (contentHeight >= 1000 && contentWidth >= 400) {
      setBodyHeight('100%');
    } else if (contentHeight < 1000 && contentWidth >= 400) {
      setBodyHeight('900px');
    } else {
      setBodyHeight('700px');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize); // 창 크기 변경 감지

    return () => {
      window.removeEventListener('resize', handleResize); // 컴포넌트 언마운트 시 이벤트 리스너 제거
    };
  }, []);

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
