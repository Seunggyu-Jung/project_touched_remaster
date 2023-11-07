import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../../Common/Button/Button';
import { backgroundState } from '../recoil';
import * as S from './BackgroundPage.styled'


export default function BackgroundPage() {
  const [color, setColor] = useState("#aabbcc");
  const [colorArray, setColorArray] = useRecoilState(backgroundState)

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
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <HexColorPicker color={color} onChange={setColor} />
        </section>
        <button onClick={handleColorArray}>색 더하기</button>
        <button onClick={reverseColorArray}>색 반전</button>

        <Button previousLink='/' nextLink='/info' />

      </S.backgroundDiv>
    </div>
  )
}
