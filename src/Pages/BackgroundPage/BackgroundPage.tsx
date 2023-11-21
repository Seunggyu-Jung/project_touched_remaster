import React, { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Button from '../../Common/Button/Button';
import { backgroundState } from '../recoil';
import Guide from '../../Common/GuideSection/GuideSection';

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
        <Guide title='편지지의 그라데이션 배경을 설정하는 방법' step1='1. 원하시는 색을 클릭하고 색 더하기를 눌러보세요' step2='2. 색상의 반전을 원하시면 색 반전 버튼을 클릭하시면 됩니다.'
          step3='* 그라데이션은 두 개의 색을 결합한 디자인을 의미하며 색을 추가하면 기존의 색을 밀어 올리는 방식으로 제작됩니다.' />
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
