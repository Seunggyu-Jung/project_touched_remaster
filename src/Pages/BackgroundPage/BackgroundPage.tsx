import React, { useState, useEffect } from 'react'
import { HexColorPicker } from 'react-colorful'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';
import * as S from './BackgroundPage.styled'


export default function BackgroundPage() {
  const [color, setColor] = useState("#aabbcc");
  const [colorArray, setColorArray] = useState<string[]>(['#FFC0CB', '#FFA500'])

  const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    background: linear-gradient(to bottom, ${colorArray[0]} , ${colorArray[1]});
  }`


  const handleColorArray = () => {
    const pickedColor = color
    setColorArray([...colorArray, pickedColor].slice(1))
  }
  const reverseColorArray = () => {
    setColorArray([...colorArray].reverse())
  }

  return (
    <div>
      <GlobalStyles />
      <S.backgroundDiv >
        <h1>편지의 배경을 선택하는 페이지 입니다.</h1>
        <HexColorPicker color={color} onChange={setColor} />
        <button onClick={handleColorArray}>+</button>
        <button onClick={reverseColorArray}>@</button>

        <Link to="/">
          <button>이전</button>
        </Link>
        <Link to="/info">
          <button>다음</button>
        </Link>
      </S.backgroundDiv>
    </div>
  )
}
