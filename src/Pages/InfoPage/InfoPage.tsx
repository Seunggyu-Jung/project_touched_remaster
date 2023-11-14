import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, nameState } from '../recoil';
import Button from '../../Common/Button/Button'
import * as S from './InfoPage.styled';

export default function InfoPage() {
  const [user, setUser] = useRecoilState(userState);
  const [name, setName] = useRecoilState(nameState);
  const navigate = useNavigate()

  const handleEmty = () => {
    if (user.toString().trim().length === 0) {
      alert("당신의 성함을 입력해주세요!")
    } else if (name.toString().trim().length === 0) {
      alert("편지를 받을 분의 성함을 입력해주세요!")
    } else {
      navigate('/write')
    }
  }

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

      <Button previousLink='/background' nextLink={handleEmty} />
    </S.InfoDiv>
  );
}
