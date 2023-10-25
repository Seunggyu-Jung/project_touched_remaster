import React from 'react';
import { userState, nameState, textState } from '../recoil';
import { useRecoilValue } from 'recoil';

export default function TestPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const text = useRecoilValue(textState)

  return (
    <div>
      <p> 당신의 이름 : {user}</p>
      <p>편지를 받을 분의 이름: {name}</p>
      <p>편지 내용 : {text}</p>
    </div>
  );
}
