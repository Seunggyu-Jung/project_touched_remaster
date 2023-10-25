import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { textState } from '../recoil';
import * as S from './Wrtiting.styled';

export default function WrittingPage() {
  const [text,setText] = useRecoilState(textState)

  return (
    <S.WritingDiv>
      <h1>편지에 작성할 편지내용을 입력하는 단계입니다.</h1>
      <S.WritingForm>
        <S.WritingArea name="letter" cols={50} rows={30} value={text} onChange={e => setText(e.target.value)}></S.WritingArea>
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
