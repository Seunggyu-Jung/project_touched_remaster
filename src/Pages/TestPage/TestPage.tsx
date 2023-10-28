import React from 'react';
import { userState, nameState, textState, fontState, sizeState } from '../recoil';
import { useRecoilValue } from 'recoil';

export default function TestPage() {
  const user = useRecoilValue(userState);
  const name = useRecoilValue(nameState);
  const text = useRecoilValue(textState);
  const font = useRecoilValue(fontState);
  const size = useRecoilValue(sizeState);

  return (
    <div>
      <link
        href={`https://fonts.googleapis.com/css?family=${font}`}
        rel="stylesheet"
      />
      <p> 당신의 이름 : {user}</p>
      <p>편지를 받을 분의 이름: {name}</p>
      <p>편지 내용 : <p style={{ fontSize: `${size}px`, fontFamily: font }}>{text}</p></p>
    </div>
  );
}
