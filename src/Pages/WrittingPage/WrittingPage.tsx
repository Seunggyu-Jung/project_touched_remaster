import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState, fontState, sizeState, textBackState } from '../recoil';
import Button from '../../Common/Button/Button'
import Guide from '../../Common/GuideSection/GuideSection';
import * as S from './Wrtiting.styled';
import { img1, img2, img3, img4, img5 } from '../../img/img';


export default function WrittingPage() {
  const [text, setText] = useRecoilState(textState)
  const [font, setFont] = useRecoilState<string>(fontState)
  const [size, setSize] = useRecoilState<string>(sizeState)
  const [selectImage, setSelectImage] = useRecoilState<string>(textBackState);
  const [hide, setHide] = useState('편지 설정 숨기기')
  const [hideSection, setHideSection] = useState(`block`)

  const navigate = useNavigate()

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setFont(e.target.value) }
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setSize(e.target.value) }
  const handleSettingHide = () => {
    if (hide === '편지 설정 숨기기') {
      setHide('편지 설정 보이기')
      setHideSection(`none`)
    } else {
      setHide('편지 설정 숨기기')
      setHideSection(`block`)
    }

  }

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectImage(e.target.value);
  }

  const handleEmty = () => {
    if (text.toString().trim().length === 0) {
      alert("편지에 아무것도 작성하지 않으셨습니다.")
    } else {
      navigate('/image')
    }
  }

  const writingAreaStyle = {
    fontSize: `${size}px`,
    fontFamily: font,
    backgroundImage: `url(${selectImage})`,
    backgroundRepeat: 'no-repeat',
  };

  const hideSectionStyle = {
    display: `${hideSection}`
  }

  return (
    <S.WritingDiv>
      <link
        href={`https://fonts.googleapis.com/css?family=${font}`}
        rel="stylesheet"
      />
      <h1>편지에 작성할 편지내용을 입력하는 단계입니다.</h1>
      <Guide title='편지 작성 가이드' step1='1. 원하시는 글자의 폰트와 크기, 편지지의 배경을 선택해주세요.' step2='2. 폰트 설정 숨기기 버튼을 누르시고 하단의 편지지에 편지를 작성하시면 됩니다.' step3='*글자 수에는 제한은 없지만, 글자 크기는 되도록 24px로 하시는 것을 권장드립니다.'></Guide>
      <button onClick={handleSettingHide}>{hide}</button>
      <S.hideSection style={hideSectionStyle}>
        <p>원하시는 글자 폰트를 선택해주세요</p>
        <label htmlFor="">
          <select id="fontSelector" value={font} onChange={handleFontChange}>
            <option value="Roboto">Roboto</option>
            <option value="Black Han Sans">Black Han Sans</option>
            <option value="Nanum Pen Script">Nanum Pen Script</option>
            <option value="Nanum Myeongjo">Nanum Myeongjo</option>
            <option value="Bagel Fat One">Bagel Fat One</option>
          </select>
        </label>
        <p>원하시는 글자 크기를 선택해주세요</p>
        <label htmlFor="">
          <select id="sizeSelector" value={size} onChange={handleSizeChange}>
            <option value="7">7px</option>
            <option value="8">8px</option>
            <option value="10">10px</option>
            <option value="12">12px</option>
            <option value="14">14px</option>
            <option value="24">24px</option>
            <option value="32">32px</option>
            <option value="48">48px</option>
          </select>
        </label>
        <p>원하시는 편지지를 선택해주세요</p>
        <label htmlFor="">
          <select id="backgroundSelector" value={selectImage} onChange={handleImageChange}>
            <option value=''>none</option>
            <option value={img1}>스타일1</option>
            <option value={img2}>스타일2</option>
            <option value={img3}>스타일3</option>
            <option value={img4}>스타일4</option>
            <option value={img5}>스타일5</option>
          </select>
        </label>
      </S.hideSection>


      <S.WritingForm>
        <S.WritingArea name="letter" cols={100} rows={30} style={writingAreaStyle} value={text} onChange={e => setText(e.target.value)} placeholder='여러분이 전하고 싶은 마음의 소리를 적어보세요'></S.WritingArea>
      </S.WritingForm>

      <Button previousLink='/info' nextLink={handleEmty} />

    </S.WritingDiv>
  );
}
