import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState } from '../recoil';
import * as S from './Wrtiting.styled';

export default function WrittingPage() {
  const [text, setText] = useRecoilState(textState)
  const [font, setFont] = useState<string>('Arial')
  const [size, setSize] = useState<string>('12')

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setFont(e.target.value) }
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => { setSize(e.target.value) }

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


      <S.WritingForm>
        <S.WritingArea name="letter" cols={100} rows={30} style={{ fontSize: `${size}px`, fontFamily: font }} value={text} onChange={e => setText(e.target.value)} placeholder='여러분이 전하고 싶은 마음의 소리를 적어보세요'></S.WritingArea>
      </S.WritingForm>
      <section style={{ width: "auto", margin: 'auto', textAlign: 'center' }}>
      </section>


      <Link to="/info">
        <button>이전</button>
      </Link>
      <Link to="/test">
        <button>다음</button>
      </Link>

    </S.WritingDiv>
  );
}
