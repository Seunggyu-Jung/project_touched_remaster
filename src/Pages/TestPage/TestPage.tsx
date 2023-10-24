import React from 'react';
import { userState, nameState } from '../recoil';
import { useRecoilState, useRecoilValue } from 'recoil';

export default function TestPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);

  return (
    <div>
      <p> 당신의 이름 : {user}</p>
      <p>편지를 받을 분의 이름: {name}</p>
    </div>
  );
}
