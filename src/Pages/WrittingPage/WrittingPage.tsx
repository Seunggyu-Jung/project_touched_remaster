import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState, fontState, sizeState, textBackState } from '../recoil';
import * as S from './Wrtiting.styled';
import { img1, img2, img3, img4, img5 } from '../../img/img';





export default function WrittingPage() {
  const [text, setText] = useRecoilState(textState)
  const [font, setFont] = useRecoilState<string>(fontState)
  const [size, setSize] = useRecoilState<string>(sizeState)
  const [selectImage, setSelectImage] = useRecoilState<string>(textBackState);

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setFont(e.target.value) }
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setSize(e.target.value) }

  const handleImageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectImage(e.target.value);
  }


  const writingAreaStyle = {
    fontSize: `${size}px`,
    fontFamily: font,
    backgroundImage: `url(${selectImage})`,
    backgroundRepeat: 'no-repeat',
  };

  return (
    <S.WritingDiv>
      <link
        href={`https://fonts.googleapis.com/css?family=${font}`}
        rel="stylesheet"
      />
      <h1>편지에 작성할 편지내용을 입력하는 단계입니다.</h1>
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

      <S.WritingForm>
        <S.WritingArea name="letter" cols={100} rows={30} style={writingAreaStyle} value={text} onChange={e => setText(e.target.value)} placeholder='여러분이 전하고 싶은 마음의 소리를 적어보세요'></S.WritingArea>
      </S.WritingForm>


      <Link to="/info">
        <button>이전</button>
      </Link>
      <Link to="/image">
        <button>다음</button>
      </Link>

    </S.WritingDiv>
  );
}
