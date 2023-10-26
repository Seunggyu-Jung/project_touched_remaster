import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState } from '../recoil';
import * as S from './Wrtiting.styled';

export default function WrittingPage() {
  const [text, setText] = useRecoilState(textState)
  const [font, setFont] = useState()
  const [size, setSize] = useState('12')

  return (
    <S.WritingDiv>
      <h1>편지에 작성할 편지내용을 입력하는 단계입니다.</h1>
      <p>원하시는 글자 폰트를 선택해주세요</p>
      <button>적용</button>
      <p>원하시는 글자 크기를 선택해주세요</p>
      <input type="text" value={size} onChange={e => setSize(e.target.value)} />
      <button onClick={() => setSize(size)}>적용</button>

      <S.WritingForm>
        <S.WritingArea name="letter" cols={100} rows={30} style={{ fontSize: `${size}px` }} value={text} onChange={e => setText(e.target.value)}></S.WritingArea>
      </S.WritingForm>

      <Link to="/info">
        <button>이전</button>
      </Link>
      <Link to="/test">
        <button>다음</button>
      </Link>
    </S.WritingDiv>
  );
}
