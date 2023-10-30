import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstPage from './Pages/FirstPage/FirstPage';
import InfoPage from './Pages/InfoPage/InfoPage';
import WrittingPage from './Pages/WrittingPage/WrittingPage';
import TestPage from './Pages/TestPage/TestPage';
import ImagePage from './Pages/ImagePage/ImagePage';
import BackgroundPage from './Pages/BackgroundPage/BackgroundPage';

function App() {
  return (
    <div>
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
