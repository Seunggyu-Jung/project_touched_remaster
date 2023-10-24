import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Wrtiting.styled';

export default function WrittingPage() {
  return (
    <S.WritingDiv>
      <h1>편지에 작성할 편지내용을 입력하는 단계입니다.</h1>
      <Link to="/">
        <button>이전</button>
      </Link>
      <Link to="/test">
        <button>다음</button>
      </Link>
    </S.WritingDiv>
  );
}
