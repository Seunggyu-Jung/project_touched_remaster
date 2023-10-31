import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, nameState } from '../recoil';
import * as S from './InfoPage.styled';

export default function InfoPage() {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useRecoilState(nameState);

  return (
    <S.InfoDiv>
      <h1>편지에 작성할 기본 정보들을 입력하는 단계입니다.</h1>
      <form>
        <p>당신의 성함은?</p>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <p>이 편지를 받고 감동할 분의 성함은?</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <Link to="/background">
        <button>이전</button>
      </Link>
      <Link to="/write">
        <button>다음</button>
      </Link>
    </S.InfoDiv>
  );
}
